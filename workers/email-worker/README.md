# Attain Email Worker

Cloudflare Worker that handles waitlist email submissions using Resend.

## Setup

1. Install dependencies:
```bash
cd workers/email-worker
npm install
```

2. Create a `.dev.vars` file with your Resend API key:
```bash
cp .dev.vars.example .dev.vars
# Edit .dev.vars and add your Resend API key
```

3. Get a Resend API key:
   - Sign up at https://resend.com
   - Create an API key
   - Add it to `.dev.vars`

## Development

Run the worker locally:
```bash
npm run dev
```

The worker will be available at http://localhost:8787

## Deployment

Deploy to Cloudflare:
```bash
npm run deploy
```

Don't forget to set the `RESEND_API_KEY` secret in Cloudflare dashboard after deployment.

## Testing

Test locally with curl:
```bash
curl -X POST http://localhost:8787 \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```
