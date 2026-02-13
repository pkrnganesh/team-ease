import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Supabase client (optional - only initialize if credentials are provided)
let supabase = null;
if (process.env.SUPABASE_URL && 
    process.env.SUPABASE_URL !== 'your_supabase_project_url' &&
    process.env.SUPABASE_ANON_KEY && 
    process.env.SUPABASE_ANON_KEY !== 'your_supabase_anon_key') {
  supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );
}

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Get all approved candidates from Supabase
app.get('/api/candidates', async (req, res) => {
  try {
    if (!supabase) {
      return res.status(400).json({ 
        error: 'Supabase not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY in .env',
        success: false
      });
    }

    const { data, error } = await supabase
      .from('candidates')
      .select('*')
      .eq('status', 'approved');

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching candidates:', error);
    res.status(500).json({ error: 'Failed to fetch candidates' });
  }
});

// Send email using Resend
const sendEmail = async (to, subject, body) => {
  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use Resend's default sender
      to: to,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="padding: 20px; background-color: #f5f5f5; border-radius: 8px;">
            ${body.replace(/\n/g, '<br>')}
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This email was sent from RuGanAI Recruitment System</p>
          </div>
        </div>
      `
    });
    return result;
  } catch (error) {
    console.error('Email send error:', error);
    throw error;
  }
};

// Send email to single candidate
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, body } = req.body;

    if (!to || !subject || !body) {
      return res.status(400).json({
        error: 'Missing required fields: to, subject, body'
      });
    }

    const result = await sendEmail(to, subject, body);

    res.json({
      success: true,
      message: 'Email sent successfully',
      data: result
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      error: 'Failed to send email',
      details: error.message
    });
  }
});

// Send emails to selected candidates
app.post('/api/send-selected-email', async (req, res) => {
  try {
    console.log('📧 Received email request:', req.body);
    
    const { candidates, subject, body, type } = req.body;

    if (!candidates || !Array.isArray(candidates) || candidates.length === 0) {
      console.error('❌ Invalid candidates array');
      return res.status(400).json({
        error: 'Invalid candidates. Must be a non-empty array'
      });
    }

    if (!subject || !body) {
      console.error('❌ Missing subject or body');
      return res.status(400).json({
        error: 'Missing required fields: subject, body'
      });
    }

    console.log(`📨 Sending ${candidates.length} emails via Resend...`);

    // Send emails to all selected candidates
    const results = await Promise.allSettled(
      candidates.map(candidate =>
        sendEmail(
          candidate.email,
          subject,
          `Dear ${candidate.name},\n\n${body}`
        )
      )
    );

    const successful = results.filter(r => r.status === 'fulfilled').length;
    const failed = results.filter(r => r.status === 'rejected').length;

    console.log(`✅ Email sending complete: ${successful} sent, ${failed} failed`);

    res.json({
      success: true,
      message: `Emails sent: ${successful} successful, ${failed} failed`,
      data: {
        total: candidates.length,
        successful,
        failed,
        type,
        results
      }
    });
  } catch (error) {
    console.error('❌ Error sending selected emails:', error);
    res.status(500).json({
      error: 'Failed to send emails to selected candidates',
      details: error.message
    });
  }
});

// Send bulk emails to all approved candidates
app.post('/api/send-bulk-email', async (req, res) => {
  try {
    const { subject, body } = req.body;

    if (!subject || !body) {
      return res.status(400).json({
        error: 'Missing required fields: subject, body'
      });
    }

    if (!supabase) {
      return res.status(400).json({ 
        error: 'Supabase not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY in .env',
        success: false
      });
    }

    // Fetch approved candidates from Supabase
    const { data: candidates, error } = await supabase
      .from('candidates')
      .select('*')
      .eq('status', 'approved');

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    if (!candidates || candidates.length === 0) {
      return res.status(400).json({ error: 'No approved candidates found' });
    }

    // Send emails to all candidates
    const results = await Promise.allSettled(
      candidates.map(candidate =>
        sendEmail(
          candidate.email,
          subject,
          `Dear ${candidate.name},\n\n${body}`
        )
      )
    );

    const successful = results.filter(r => r.status === 'fulfilled').length;
    const failed = results.filter(r => r.status === 'rejected').length;

    res.json({
      success: true,
      message: `Emails sent: ${successful} successful, ${failed} failed`,
      data: {
        total: candidates.length,
        successful,
        failed,
        results
      }
    });
  } catch (error) {
    console.error('Error sending bulk emails:', error);
    res.status(500).json({
      error: 'Failed to send bulk emails',
      details: error.message
    });
  }
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`\n✅ Server is running on http://localhost:${PORT}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
  console.log(`📨 Send email: POST http://localhost:${PORT}/api/send-selected-email`);
  console.log(`📋 Get candidates: http://localhost:${PORT}/api/candidates`);
  console.log(`\n🔑 Resend API Key: ${process.env.RESEND_API_KEY ? '✅ Configured' : '❌ Missing'}`);
  console.log(`🗄️  Supabase: ${supabase ? '✅ Configured' : '⚠️  Not configured (using hardcoded data)'}`);
  console.log('\n');
});

// Handle server errors
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use. Try a different port.`);
  } else {
    console.error('❌ Server error:', error);
  }
  process.exit(1);
});
