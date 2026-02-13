# Team Ease Backend API

## Setup Instructions

1. **Install dependencies:**
   ```bash
   cd server
   npm install
   ```

2. **Get a Resend API Key:**
   - Go to https://resend.com
   - Sign up for a free account
   - Create an API key from the dashboard
   - Copy the API key

3. **Create .env file:**
   ```bash
   touch .env
   ```

   Add the following to `.env`:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   PORT=5000
   ```

4. **Update sender email:**
   - In `server.js`, replace `onboarding@resend.dev` with your verified sender email
   - You can use the default Resend email for testing, or verify your own domain

5. **Run the server:**
   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:5000`

## API Endpoints

### Health Check
- **GET** `/health`
- Returns server status

### Send Single Email
- **POST** `/api/send-email`
- Body:
  ```json
  {
    "to": "recipient@example.com",
    "subject": "Email Subject",
    "body": "Email content (supports HTML)"
  }
  ```

### Send Bulk Emails
- **POST** `/api/send-bulk-email`
- Body:
  ```json
  {
    "recipients": [
      { "name": "John Doe", "email": "john@example.com" },
      { "name": "Jane Smith", "email": "jane@example.com" }
    ],
    "subject": "Email Subject",
    "body": "Email content"
  }
  ```

## Frontend Integration

The frontend is already configured to send requests to this API. Make sure:
1. Backend is running on `http://localhost:5000`
2. CORS is enabled (it is by default)
3. Email addresses in candidates are valid

## Troubleshooting

- **CORS errors?** Backend has CORS enabled for all origins (can be restricted in production)
- **Email not sending?** Check your Resend API key and sender email verification
- **Port already in use?** Change PORT in .env file
