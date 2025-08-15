# Deployment Guide - MW Brady Law Website

This guide provides step-by-step instructions for deploying the MW Brady Law website to various hosting platforms.

## 🚀 Quick Start Deployment

### Option 1: Netlify (Recommended)

Netlify is the recommended hosting platform for this site due to its excellent support for JAMstack applications and automatic deployments.

#### Step 1: Prepare Your Repository
1. Create a new repository on GitHub, GitLab, or Bitbucket
2. Push your project code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repository-url>
   git push -u origin main
   ```

#### Step 2: Connect to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up/log in
2. Click "New site from Git"
3. Choose your Git provider and authorize Netlify
4. Select your repository

#### Step 3: Configure Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18 or higher

#### Step 4: Deploy
1. Click "Deploy site"
2. Netlify will automatically build and deploy your site
3. You'll get a random subdomain (e.g., `amazing-site-123.netlify.app`)
4. You can change this to a custom domain later

#### Step 5: Set Up Custom Domain (Optional)
1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the DNS configuration instructions
4. SSL certificate will be automatically provisioned

### Option 2: Vercel

#### Step 1: Prepare Repository
Same as Netlify - push your code to a Git repository.

#### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/log in
2. Click "New Project"
3. Import your Git repository
4. Vercel will auto-detect Astro and configure build settings
5. Click "Deploy"

#### Step 3: Custom Domain (Optional)
1. Go to project settings in Vercel dashboard
2. Navigate to "Domains"
3. Add your custom domain and configure DNS

### Option 3: GitHub Pages

#### Step 1: Configure GitHub Actions
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

#### Step 2: Enable GitHub Pages
1. Go to repository settings
2. Navigate to "Pages"
3. Select "GitHub Actions" as source
4. Push to main branch to trigger deployment

## 🔧 Configuration for Production

### Environment Variables

If you need environment variables for production:

#### Netlify
1. Go to Site settings → Environment variables
2. Add variables as needed

#### Vercel
1. Go to Project settings → Environment Variables
2. Add variables for Production environment

### Form Configuration

#### Update Formspree Form ID
1. Create account at [formspree.io](https://formspree.io)
2. Create a new form for your domain
3. Copy the form ID
4. Update `src/pages/contact.astro`:
   ```astro
   <form action="https://formspree.io/f/YOUR_ACTUAL_FORM_ID" method="POST">
   ```
5. Update the `_next` hidden field to your actual domain:
   ```html
   <input type="hidden" name="_next" value="https://yourdomain.com/thank-you">
   ```

### DNS Configuration

#### For Custom Domain
1. **A Record**: Point to your hosting provider's IP
2. **CNAME**: Point www subdomain to your main domain
3. **MX Records**: Configure email if needed

#### Common DNS Settings
- **Netlify**: Follow their DNS instructions in dashboard
- **Vercel**: Add CNAME record pointing to `cname.vercel-dns.com`
- **GitHub Pages**: Add CNAME record pointing to `username.github.io`

## 📊 Performance Optimization

### Pre-deployment Checklist
- [ ] Test build locally: `npm run build`
- [ ] Check for broken links
- [ ] Optimize images in `public/images/`
- [ ] Verify contact form works
- [ ] Test on mobile devices
- [ ] Check SEO meta tags

### Post-deployment Tasks
- [ ] Set up Google Analytics (if needed)
- [ ] Configure Google Search Console
- [ ] Set up uptime monitoring
- [ ] Test contact form submissions
- [ ] Verify SSL certificate

## 🔄 Continuous Deployment

### Automatic Deployments
Both Netlify and Vercel support automatic deployments:
- Push to main branch → Automatic deployment
- Pull request → Preview deployment
- Rollback capability if issues arise

### Branch Deployments
- **Production**: `main` branch
- **Staging**: `develop` branch (optional)
- **Feature**: Feature branches for testing

## 🛠 Troubleshooting

### Common Build Issues

#### TinaCMS Build Errors
If you get TinaCMS client configuration errors:
```bash
# Build without TinaCMS for static deployment
npx astro build
```

#### Node Version Issues
Ensure Node.js 18+ is used:
```yaml
# In GitHub Actions
- uses: actions/setup-node@v4
  with:
    node-version: 18
```

#### Memory Issues
For large builds, increase memory:
```json
{
  "scripts": {
    "build": "NODE_OPTIONS='--max-old-space-size=4096' npm run build"
  }
}
```

### Form Issues
- Verify Formspree form ID is correct
- Check that form action URL is properly formatted
- Ensure thank you page exists at specified URL

### SSL/HTTPS Issues
- Most modern hosts provide automatic SSL
- Verify all internal links use relative paths
- Check that external resources use HTTPS

## 📱 Mobile Testing

Before going live, test on:
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Various screen sizes

## 🔍 SEO Setup

### Post-deployment SEO Tasks
1. **Google Search Console**
   - Add and verify your domain
   - Submit sitemap: `https://yourdomain.com/sitemap-index.xml`

2. **Google My Business**
   - Update website URL
   - Ensure NAP (Name, Address, Phone) consistency

3. **Analytics**
   - Set up Google Analytics 4
   - Configure conversion tracking for contact form

## 📞 Support

### Getting Help
- **Technical Issues**: Check GitHub issues or create new one
- **Hosting Support**: Contact your hosting provider
- **Content Updates**: Use TinaCMS admin interface

### Maintenance Schedule
- **Weekly**: Check uptime and form submissions
- **Monthly**: Update dependencies and security patches
- **Quarterly**: Performance audit and optimization

---

## 🎉 Go Live Checklist

Before announcing your new website:

- [ ] All content migrated and reviewed
- [ ] Contact form tested and working
- [ ] SSL certificate active
- [ ] Custom domain configured
- [ ] Google Analytics/Search Console set up
- [ ] Mobile responsiveness verified
- [ ] Page load speed optimized
- [ ] SEO meta tags verified
- [ ] Social media links updated
- [ ] Old website redirects configured (if applicable)

Congratulations on your new website! 🚀

