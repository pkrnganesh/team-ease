# Supabase + Gmail Setup Guide

## Step 1: Create Supabase Account & Project

1. Go to https://supabase.com
2. Sign up / Sign in
3. Create a new project:
   - Project name: `team-ease`
   - Database password: Choose a strong password
   - Region: Choose closest to you
4. Copy your credentials (you'll need them in `.env`)

## Step 2: Get Your Supabase Credentials

In your Supabase dashboard:
- Go to **Settings** > **API**
- Copy:
  - `Project URL` (SUPABASE_URL)
  - `anon public` key (SUPABASE_ANON_KEY)

## Step 3: Create Candidates Table

1. In Supabase dashboard, go to **SQL Editor**
2. Create a new query and run this:

```sql
CREATE TABLE candidates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  role VARCHAR(255),
  experience VARCHAR(100),
  score INT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert sample data
INSERT INTO candidates (name, email, role, experience, score, status)
VALUES
  ('Sarah Johnson', 'padmaji94@gmail.com', 'Senior Frontend Dev', '5 years', 94, 'approved'),
  ('Mike Chen', 'mike.chen@example.com', 'Full Stack Dev', '4 years', 91, 'approved'),
  ('Lisa Park', 'lisa.park@example.com', 'React Developer', '3 years', 88, 'approved');
```

3. Click **Run** to execute

## Step 4: Setup Gmail API

### Get Gmail Credentials:

1. Go to https://console.cloud.google.com
2. Create a new project called "Team Ease"
3. Enable **Gmail API**:
   - Search for "Gmail API"
   - Click **Enable**
4. Create OAuth 2.0 Credentials:
   - Go to **Credentials** > **Create Credentials** > **OAuth 2.0 Client ID**
   - Application type: **Web application**
   - Authorized redirect URIs: `http://localhost:5000/auth/callback`
   - Download JSON file (save as `gmail-credentials.json`)

### Generate Gmail Refresh Token:

1. Use this tool to generate a refresh token:
   https://developers.google.com/oauthplayground

2. Steps:
   - Click ⚙️ (settings) and enable "Use your own OAuth credentials"
   - Paste your Client ID and Client Secret
   - In the left panel, find Gmail API > `https://www.googleapis.com/auth/gmail.send`
   - Click **Authorize APIs**
   - In Step 2, click **Exchange authorization code for tokens**
   - Copy the **Refresh Token**

## Step 5: Update Server `.env`

Add these to `/server/.env`:

```
# Supabase
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key

# Gmail
GMAIL_CLIENT_ID=your_gmail_client_id
GMAIL_CLIENT_SECRET=your_gmail_client_secret
GMAIL_REFRESH_TOKEN=your_gmail_refresh_token
GMAIL_USER_EMAIL=your-email@gmail.com

# Resend (keep if using)
RESEND_API_KEY=your_resend_key

PORT=5000
```

## Troubleshooting

**Q: Can't connect to Supabase?**
- Check your credentials are correct
- Ensure your project is active in Supabase dashboard

**Q: Gmail not sending?**
- Verify Gmail API is enabled in Google Cloud Console
- Check refresh token is correct
- Enable "Less secure app access" if needed (for Gmail)

**Q: CORS errors?**
- Backend has CORS enabled by default
- Check browser console for actual error

