# PanamaHealth Website Deployment Guide

This guide walks you through deploying the PanamaHealth landing page to GitHub Pages with automatic deployments.

## Prerequisites

- GitHub account
- Git installed locally
- Repository created on GitHub

---

## Step 1: Create GitHub Repository

### Option A: New Repository

1. Go to https://github.com/new
2. Repository name: `panamahealth-landing` (or your preferred name)
3. Description: "PanamaHealth Federated Learning Platform Landing Page"
4. Choose **Public** (required for free GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Option B: Organization Repository

If you want the site at `https://panamahealth.github.io` (without a subdirectory):

1. Create a GitHub organization named "panamahealth" at https://github.com/organizations/plan
2. Create a repository named exactly: `panamahealth.github.io`
3. This special repository name will deploy to the root domain

---

## Step 2: Push Code to GitHub

### First Time Setup

From the project directory (`/Users/yaserkeneshloo/panamahealth-landing`), run:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: PanamaHealth landing page

- Federated learning platform for healthcare
- Astro + Tailwind CSS
- Cyan/blue gradient design
- Contact form ready for Web3Forms integration
- Optimized for GitHub Pages deployment"

# Add your GitHub repository as remote
# Replace with your actual repository URL:
git remote add origin https://github.com/panamahealth/panamahealth.github.io.git
# OR if using a different repo name:
# git remote add origin https://github.com/USERNAME/panamahealth-landing.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 3: Configure GitHub Pages

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source:** Select "GitHub Actions"
   - (NOT "Deploy from a branch" - we want Actions for automatic builds)
5. Click **Save**

That's it! The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build the site when you push to `main`
- Deploy to GitHub Pages
- Make it available at your GitHub Pages URL

### Verify Deployment

1. Go to the **Actions** tab in your repository
2. You should see a "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site is live!

**Your site URL:**
- If using `USERNAME.github.io` repo: `https://USERNAME.github.io`
- If using other repo name: `https://USERNAME.github.io/panamahealth-landing`

---

## Step 4: Update Configuration for Subdirectory (If Needed)

**Skip this step if:**
- Your repo is named `USERNAME.github.io` or `ORGNAME.github.io`
- Your site deploys to the root URL

**If your repo has a different name** (like `panamahealth-landing`):

1. Update `astro.config.ts`:
   ```typescript
   export default defineConfig({
     output: 'static',
     site: 'https://USERNAME.github.io',
     base: '/panamahealth-landing', // ⚠️ Add this line
     // ...
   ```

2. Update `src/config.yaml`:
   ```yaml
   site:
     name: PanamaHealth
     site: 'https://USERNAME.github.io/panamahealth-landing'
     base: '/panamahealth-landing'
   ```

3. Commit and push:
   ```bash
   git add .
   git commit -m "Update base URL for subdirectory deployment"
   git push
   ```

---

## Step 5: Configure Custom Domain (Optional)

Want to use `www.panamahealth.ai` instead of `USERNAME.github.io`?

### Prerequisites

- Domain purchased (recommended: Namecheap, Google Domains, Cloudflare)
- Access to DNS settings

### Steps

1. **Add CNAME file to your repo:**
   ```bash
   # Create CNAME file in public directory
   echo "www.panamahealth.ai" > public/CNAME

   git add public/CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS at your domain provider:**

   Add these DNS records:

   **For apex domain (panamahealth.ai):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153

   Type: A
   Name: @
   Value: 185.199.109.153

   Type: A
   Name: @
   Value: 185.199.110.153

   Type: A
   Name: @
   Value: 185.199.111.153
   ```

   **For www subdomain (www.panamahealth.ai):**
   ```
   Type: CNAME
   Name: www
   Value: USERNAME.github.io
   ```

3. **Configure on GitHub:**
   - Go to Settings > Pages
   - Under "Custom domain", enter: `www.panamahealth.ai`
   - Check "Enforce HTTPS" (wait for SSL certificate to be issued, ~15 minutes)

4. **Update site configuration:**

   Update `src/config.yaml`:
   ```yaml
   site:
     name: PanamaHealth
     site: 'https://www.panamahealth.ai'
     base: '/'
   ```

   Update `astro.config.ts`:
   ```typescript
   export default defineConfig({
     output: 'static',
     site: 'https://www.panamahealth.ai',
     // Remove base: '/...' if present
   ```

5. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update to custom domain"
   git push
   ```

DNS propagation can take 24-48 hours, but usually works within an hour.

---

## Step 6: SEO Configuration

### Update Meta Tags

The site already has basic SEO configured in `src/config.yaml`. Verify these settings:

```yaml
metadata:
  title:
    default: PanamaHealth - Federated Intelligence Infrastructure for Healthcare
    template: '%s — PanamaHealth'
  description: "Connecting oceans of intelligence, not data. Federated learning infrastructure..."
  robots:
    index: true
    follow: true
```

### Add Google Analytics (Optional)

1. Create Google Analytics 4 property at https://analytics.google.com
2. Copy your Measurement ID (looks like `G-XXXXXXXXXX`)
3. Update `src/config.yaml`:
   ```yaml
   analytics:
     vendors:
       googleAnalytics:
         id: 'G-XXXXXXXXXX'  # Replace with your ID
   ```
4. Commit and push

### Submit to Google Search Console

1. Go to https://search.google.com/search-console
2. Add your property: `https://USERNAME.github.io` or custom domain
3. Verify ownership:
   - **Method 1 (Recommended):** HTML file upload (download verification file and add to `public/` directory)
   - **Method 2:** DNS record (add TXT record to your domain)
4. Once verified, submit your sitemap:
   - Sitemap URL: `https://yoursite.com/sitemap-index.xml`
   - Auto-generated by Astro!

---

## Step 7: Continuous Deployment

### Automatic Deployments

Every time you push to the `main` branch, GitHub Actions will:
1. Build the site
2. Run optimizations (compression, image optimization)
3. Deploy to GitHub Pages
4. Update your live site (takes 2-3 minutes)

### Manual Deployment

You can manually trigger a deployment:
1. Go to **Actions** tab
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow" > "Run workflow"

---

## Testing Before Deployment

### Local Preview

Always test locally before pushing:

```bash
# Development server (with hot reload)
npm run dev
# Open: http://localhost:4321

# Production build preview
npm run build
npm run preview
# Open: http://localhost:4321
```

### Build Verification

Check that the build succeeds:

```bash
npm run build
# Look for "build Complete!" message
# Verify dist/ directory is created
```

---

## Troubleshooting

### Build Fails on GitHub Actions

**Check the Actions log:**
1. Go to Actions tab
2. Click on the failed workflow
3. Expand the failed step to see error details

**Common issues:**
- **Module not found:** Run `npm install` locally and commit `package-lock.json`
- **Image optimization fails:** Check image file sizes (<5MB each)
- **Icon not found:** Verify icon names exist in Tabler Icons

**Fix and redeploy:**
```bash
# Fix the issue locally
npm run build  # Verify it works

git add .
git commit -m "Fix build error: [description]"
git push
```

### Site Shows 404

**Causes:**
- DNS not propagated yet (wait 1-24 hours)
- Base URL misconfigured (check `astro.config.ts` and `config.yaml`)
- GitHub Pages not enabled (check Settings > Pages)

**Fix:**
1. Verify GitHub Pages is enabled in Settings
2. Check that `base:` in config matches your repo name
3. Try accessing: `https://USERNAME.github.io/REPO-NAME` directly

### CSS/Images Not Loading

**Cause:** Base URL mismatch

**Fix:** Ensure `astro.config.ts` base matches your deployment:
- Root domain: no `base:` needed
- Subdirectory: `base: '/repo-name'`

### Custom Domain Not Working

**Check:**
1. CNAME file exists in `public/` directory
2. DNS records are correct (use `dig www.panamahealth.ai` to verify)
3. GitHub Pages custom domain is set in Settings
4. HTTPS certificate is issued (takes 15 mins after DNS propagation)

---

## Performance Optimization

### Already Included

✅ Image optimization (WebP format)
✅ CSS/HTML compression
✅ Lazy loading
✅ Sitemap generation
✅ Responsive images

### Additional Optimizations

1. **Add more image formats:**
   - Export images as WebP with JPG fallback
   - Use Squoosh.app to compress

2. **Monitor performance:**
   - Run Lighthouse in Chrome DevTools
   - Target: 95+ score on mobile/desktop

3. **Optimize fonts:**
   - Already using Inter Variable (optimized)
   - Consider subsetting if needed

---

## Maintenance & Updates

### Regular Updates

```bash
# Pull latest changes
git pull

# Make changes to content
# Edit src/pages/index.astro or other files

# Test locally
npm run dev

# Commit and push
git add .
git commit -m "Update: [description of changes]"
git push

# Deployment happens automatically!
```

### Update Dependencies

```bash
# Check for outdated packages
npm outdated

# Update all packages
npm update

# Update Astro specifically
npm install astro@latest

# Test build
npm run build

# If successful, commit
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

---

## Security Considerations

### Repository Visibility

- **Public repo:** Required for free GitHub Pages
- **Private repo:** GitHub Pages requires GitHub Pro ($4/month)

### Sensitive Information

**Never commit:**
- API keys (Web3Forms access key goes in form, not repo)
- Passwords
- Environment variables with secrets

**Safe to commit:**
- Configuration files
- Public content
- Image assets
- Form structure (without API keys)

### Form Security

When setting up Web3Forms:
- Access key is public (it's okay to be in source)
- Add honeypot field to prevent spam
- Consider adding reCAPTCHA for production

---

## Next Steps After Deployment

1. **Set up contact form:**
   - Follow `CONTACT_FORM_SETUP.md`
   - Get Web3Forms access key
   - Update Form component
   - Test submissions

2. **Add hero image:**
   - Follow `VISUAL_ASSETS_TODO.md`
   - Source from Unsplash or generate
   - Add to `src/assets/images/`
   - Update Hero component

3. **Set up Google Analytics:**
   - Create GA4 property
   - Add ID to `config.yaml`
   - Monitor traffic

4. **Monitor performance:**
   - Check Google Search Console weekly
   - Run Lighthouse audits monthly
   - Monitor form submissions

5. **Iterate based on feedback:**
   - Update content based on pilot partner feedback
   - Add testimonials as partners succeed
   - Create case studies

---

## Support Resources

- **Astro Documentation:** https://docs.astro.build
- **GitHub Pages Documentation:** https://docs.github.com/pages
- **AstroWind Template:** https://github.com/onwidget/astrowind
- **Tailwind CSS:** https://tailwindcss.com/docs

---

## Quick Reference: Common Commands

```bash
# Development
npm run dev                 # Start dev server
npm run build              # Build for production
npm run preview            # Preview production build

# Git
git status                 # Check what changed
git add .                  # Stage all changes
git commit -m "message"    # Commit with message
git push                   # Push to GitHub (triggers deploy)

# Deployment
# Push to main branch = automatic deployment!

# Check deployment status
# Go to: https://github.com/USERNAME/REPO/actions
```

---

## Deployment Checklist

Before going live:

- [ ] Repository created on GitHub
- [ ] Code pushed to `main` branch
- [ ] GitHub Pages enabled in Settings
- [ ] GitHub Actions workflow running successfully
- [ ] Site accessible at GitHub Pages URL
- [ ] All images optimized (<200KB each)
- [ ] Contact form configured (Web3Forms)
- [ ] Meta descriptions added
- [ ] Favicon displays correctly
- [ ] Mobile responsive design verified
- [ ] Lighthouse score >90
- [ ] Google Analytics configured (if desired)
- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled
- [ ] Test all internal links work
- [ ] Test contact form submissions

You're ready to launch! 🚀
