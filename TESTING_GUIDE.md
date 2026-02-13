# Testing Email Sending Functionality

## Setup Complete ✅

The system is now ready to send emails using **Resend** (configured in `.env`).

## How to Test:

### 1. **Start the Backend Server**
```bash
cd /Users/shannupippalla/team-ease/server
npm run dev
```

You should see:
```
Server is running on http://localhost:5000
Health check: http://localhost:5000/health
Get candidates: http://localhost:5000/api/candidates
```

### 2. **Start the Frontend Dev Server** (in new terminal)
```bash
cd /Users/shannupippalla/team-ease
npm run dev
```

### 3. **Test the Email Feature:**

1. Navigate to **Application Management** page
2. **Select candidates** by checking the checkboxes next to their names:
   - Check boxes in the "Approved Candidates" section, OR
   - Check boxes in the "Rejected Candidates" section
3. **Click the "Send Mail" button** at the bottom
   - Green button for approved: "Send Mail to X Approved"
   - Red button for rejected: "Send Emails to X Rejected"
4. **Watch for the message** at the top:
   - ✅ Green message: "Successfully sent emails to X candidate(s)"
   - ❌ Red message: Error details if something went wrong

## Test Accounts:

**Approved Candidates:**
- Sarah Johnson (sarah.johnson@example.com)
- Mike Chen (mike.chen@example.com)
- Lisa Park (lisa.park@example.com)

**Rejected Candidates:**
- John Smith (john.smith@example.com)
- Amy Wong (amy.wong@example.com)
- Carlos Rodriguez (carlos.rodriguez@example.com)

## Features Implemented:

✅ Select multiple candidates with checkboxes
✅ "Select All" option for each section
✅ Send personalized emails using Resend API
✅ Different email templates for approved vs rejected
✅ Success/error messages displayed
✅ Loading state while sending
✅ Disabled button when no candidates selected
✅ Button text shows selected count

## Troubleshooting:

**Issue: CORS Error**
- Make sure backend is running on port 5000
- Check that CORS is enabled (it is by default)

**Issue: Email not sending**
- Verify Resend API key in `.env` is correct
- Check browser console for error details
- Check backend terminal for error logs

**Issue: Button disabled**
- Make sure you've selected at least one candidate
- Check that checkboxes are properly checked

## Next Steps (Optional):

1. Replace test email addresses with real ones
2. Set up Supabase database to store candidates
3. Integrate with your actual candidate management system
4. Add Gmail OAuth2 for personal email accounts (instructions in SUPABASE_GMAIL_SETUP.md)
