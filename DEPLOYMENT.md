# 🚀 Deploying to Vercel with Custom Domain

## Step 1: Deploy to Vercel (FREE)

### Option A: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - Link to your GitHub repository
   - It will automatically detect Vite configuration

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Option B: Using Vercel Dashboard (Easier)

1. Go to: https://vercel.com/signup
2. Sign up with GitHub (it's FREE)
3. Click "Add New Project"
4. Import your `Personal-Portfolio` repository
5. Vercel will auto-detect Vite settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

---

## Step 2: Add Environment Variables on Vercel

⚠️ **IMPORTANT**: Add your environment variables before deploying!

1. In your Vercel project dashboard
2. Go to **Settings** → **Environment Variables**
3. Add these variables:

   ```
   VITE_GA_TRACKING_ID = G-2V2J5T7S34
   VITE_EMAILJS_SERVICE_ID = service_pdnl8y2
   VITE_EMAILJS_TEMPLATE_ID = template_6n4dwgj
   VITE_EMAILJS_PUBLIC_KEY = tOBeYKGnhlRX3-AnG
   ```

4. Click "Save"
5. **Redeploy** your project for changes to take effect

---

## Step 3: Custom Domain (FREE Options)

### 🎯 Option 1: Free Domain from Providers

**Best FREE Domain Providers:**

1. **Freenom** (freenom.com)
   - FREE domains: `.tk`, `.ml`, `.ga`, `.cf`, `.gq`
   - Example: `abhishekgoyal.tk`
   - 100% Free for 12 months (renewable)

2. **dot.tk**
   - Free `.tk` domains
   - Easy setup

3. **InfinityFree** (infinityfree.com)
   - Free subdomain included
   - Can get free domain

### 🎯 Option 2: Paid Domain (Cheap - $1-12/year)

**Recommended Providers:**
1. **Namecheap** (~$0.99-2.99 first year for `.dev`)
2. **GoDaddy** (~$0.99 first year)
3. **Google Domains** (~$12/year for `.dev`)
4. **Cloudflare** (~$8-10/year, no markup)

**For `.dev` domain like `abhishekgoyal.dev`:**
- Cost: $10-12/year
- Provider: Google Domains or Namecheap
- ⚠️ Note: `.dev` domains are NOT available for free

### 🎯 Option 3: Free Vercel Subdomain (EASIEST)

You get a FREE subdomain automatically:
- Format: `your-project.vercel.app`
- Example: `abhishekgoyal-portfolio.vercel.app`
- Professional and works great!

---

## Step 4: Connect Custom Domain to Vercel

### If you bought a domain:

1. **In Vercel Dashboard**:
   - Go to your project
   - Click **Settings** → **Domains**
   - Add your domain: `abhishekgoyal.dev`

2. **In Your Domain Provider**:
   - Go to DNS settings
   - Add these records:

   **For root domain (`abhishekgoyal.dev`):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS propagation** (5 minutes - 48 hours)

4. **Vercel will auto-generate FREE SSL certificate** ✅

---

## Step 5: Update Your Code

Once you have your domain, update `SEO.jsx`:

```jsx
url = 'https://your-actual-domain.vercel.app'  // or your custom domain
```

---

## 🎁 My Recommendation for YOU

### **FREE Path (No cost):**
1. Deploy to Vercel → Get free `abhishekgoyal-portfolio.vercel.app`
2. Use Freenom to get `abhishekgoyal.tk` for FREE
3. Connect domain to Vercel
4. **Total Cost: $0**

### **Budget Path ($10-12/year):**
1. Buy `abhishekgoyal.dev` from Namecheap ($10-12/year)
2. Deploy to Vercel (FREE)
3. Connect domain
4. Professional `.dev` domain
5. **Total Cost: ~$1/month**

---

## 🚀 Quick Start Command

Run this in your terminal RIGHT NOW:

```bash
npm install -g vercel
vercel login
vercel
```

Then follow the prompts! Vercel will:
- Auto-detect your Vite project
- Build and deploy
- Give you a live URL in seconds

---

## ✅ Checklist

- [ ] Install Vercel CLI or use Vercel Dashboard
- [ ] Deploy project to Vercel
- [ ] Add environment variables in Vercel dashboard
- [ ] Choose domain option (free subdomain or custom)
- [ ] If custom domain: Buy domain and configure DNS
- [ ] Update SEO.jsx with actual URL
- [ ] Test deployment
- [ ] Share your portfolio! 🎉

---

## 🆘 Need Help?

Common issues:
1. **Build fails**: Check if all dependencies are in `package.json`
2. **Environment variables not working**: Make sure they start with `VITE_`
3. **Domain not connecting**: Wait 24-48 hours for DNS propagation
4. **404 errors**: Check output directory is set to `dist`

Let me know which option you want to go with! 🚀
