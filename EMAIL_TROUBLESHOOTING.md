# Email Sending Troubleshooting Checklist

## ✅ Backend Status
- Server: Running on port 3001
- Resend API: Configured (re_aWcnqsK2_NZWzSgn5HqZHUVZqckPzP3Mx)
- Supabase: Configured

## Common Reasons Emails Aren't Sent:

### 1. **Backend Server Not Running** ❌ FIXED
- Server is now running on port 3001
- Check: `curl http://localhost:3001/health`

### 2. **Frontend Not Making API Call**
- Check browser console (F12) for errors
- Look for "Failed to fetch" messages
- Verify API endpoint URL is `http://localhost:3001/api/send-selected-email`

### 3. **No Candidates Selected**
- Make sure you're clicking checkboxes next to candidate names
- "Select All" checkbox should highlight all candidates
- Should show selected count on button: "Send Mail to X Approved"

### 4. **Invalid Email Addresses**
- Resend test domain: `@example.com` works but shows as test
- For real delivery: Use actual email addresses
- Example: change `sarah.johnson@example.com` to `sarah.johnson@yourcompany.com`

### 5. **Resend API Key Invalid**
- Current key: `re_aWcnqsK2_NZWzSgn5HqZHUVZqckPzP3Mx`
- Check it's not expired
- Verify in Resend dashboard: https://resend.com/api-keys

### 6. **Network/CORS Issues**
- Backend has CORS enabled
- Frontend calls `http://localhost:3001`
- Both must be running (Backend + Frontend dev server)

## Quick Test Steps:

1. **Start Backend:**
   ```bash
   cd /Users/shannupippalla/team-ease/server
   node server.js
   ```

2. **Start Frontend** (in another terminal):
   ```bash
   cd /Users/shannupippalla/team-ease
   npm run dev
   ```

3. **In Application Management Page:**
   - Click checkbox next to "Sarah Johnson"
   - Click "Send Mail to 1 Approved"
   - Should see popup: "✅ Emails Sent!"

4. **Check Backend Logs:**
   ```bash
   tail -f /Users/shannupippalla/team-ease/server/server.log
   ```

## Email API Debugging:

**Test API manually:**
```bash
curl -X POST http://localhost:3001/api/send-selected-email \
  -H "Content-Type: application/json" \
  -d '{
    "candidates": [
      {"name": "Sarah Johnson", "email": "sarah.johnson@gmail.com"}
    ],
    "subject": "Test Email",
    "body": "This is a test",
    "type": "approved"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Emails sent: 1 successful, 0 failed",
  "data": {
    "total": 1,
    "successful": 1,
    "failed": 0,
    "type": "approved"
  }
}
```

## If Emails Still Don't Send:

1. Check Resend dashboard for failed deliveries
2. Verify email addresses are valid (not @example.com for production)
3. Check backend logs for error messages
4. Try with real email address instead of test email
5. Verify Resend API key is active
