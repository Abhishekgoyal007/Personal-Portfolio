# Environment Variables Setup Guide

## 🔐 Protecting Your API Keys

Your `.env` file is now configured to keep sensitive data out of GitHub. Follow these steps:

## 📝 Setup Instructions

### 1. Update Your `.env` File

Open `.env` and replace the placeholder values with your actual keys:

```env
# Google Analytics
VITE_GA_TRACKING_ID=G-YOUR-ACTUAL-ID

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_pdnl8y2
VITE_EMAILJS_TEMPLATE_ID=template_6n4dwgj
VITE_EMAILJS_PUBLIC_KEY=tOBeYKGnhlRX3-AnG

# GitHub API (Optional - for higher rate limits)
VITE_GITHUB_TOKEN=ghp_your_token_here
```

### 2. Where to Find Your Keys

#### **Google Analytics**
- Go to: https://analytics.google.com/
- Navigate to Admin > Data Streams
- Copy your Measurement ID (format: `G-XXXXXXXXXX`)

#### **EmailJS** (Already configured)
- Service ID: `service_pdnl8y2`
- Template ID: `template_6n4dwgj`
- Public Key: `tOBeYKGnhlRX3-AnG`

#### **GitHub Token** (Optional - increases API rate limit from 60 to 5000 requests/hour)
- Go to: https://github.com/settings/tokens
- Generate new token (classic)
- Select scope: `public_repo` (read-only)
- Copy the token

### 3. Verify Your Setup

The code will fallback to your existing values if environment variables aren't set, so your app will still work!

## 🚀 Deployment

### For Vercel/Netlify:
Add environment variables in your dashboard:
- Vercel: Project Settings > Environment Variables
- Netlify: Site Settings > Build & Deploy > Environment

### For Other Platforms:
Check your platform's documentation for adding environment variables.

## ✅ What's Protected Now

- ✅ `.env` is in `.gitignore` (won't be pushed to GitHub)
- ✅ Google Analytics tracking ID
- ✅ EmailJS credentials (service ID, template ID, public key)
- ✅ GitHub API token (optional)
- ✅ `.env.example` is safe to commit (shows structure without real values)

## 🔄 Updated Files

1. **`.env`** - Your private keys (not in GitHub)
2. **`.env.example`** - Template for others (safe to commit)
3. **`.gitignore`** - Prevents `.env` from being committed
4. **`Analytics.jsx`** - Uses `VITE_GA_TRACKING_ID`
5. **`Contact.jsx`** - Uses EmailJS env variables
6. **`GithubContributions.jsx`** - Uses optional GitHub token

## 💡 Important Notes

- **Never commit `.env`** - It's now in `.gitignore`
- **Commit `.env.example`** - Helps others set up their own environment
- **Vite prefix required** - All env variables must start with `VITE_`
- **Restart dev server** - After changing `.env`, restart your dev server

## 🛡️ Security Best Practices

1. ✅ API keys are in environment variables
2. ✅ `.env` is gitignored
3. ✅ Fallback values ensure app still works
4. ✅ `.env.example` provides setup template
5. ✅ No sensitive data in source code

Your keys are now safe! 🎉
