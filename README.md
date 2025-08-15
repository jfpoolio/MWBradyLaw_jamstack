# MW Brady Law Website

A modern, self-hosted website built with Astro, TinaCMS, and Formspree, migrated from the original Wix site.

## 🚀 Features

- **Modern JAMstack Architecture**: Built with Astro for optimal performance
- **Content Management**: TinaCMS for easy content editing
- **Contact Forms**: Formspree integration with submission storage
- **Responsive Design**: Mobile-first design that works on all devices
- **SEO Optimized**: Built-in SEO features and meta tags
- **Fast Loading**: Optimized images and minimal JavaScript
- **Git-Based Workflow**: All content stored in Git for version control

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **CMS**: [TinaCMS](https://tina.io/) - Git-based content management
- **Styling**: [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Forms**: [Formspree](https://formspree.io/) - Form handling service
- **Deployment**: Ready for Netlify, Vercel, or any static hosting

## 📁 Project Structure

```
/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   ├── content/          # Content collections
│   │   └── practice-areas/  # Practice area content
│   ├── layouts/          # Page layouts
│   ├── pages/            # Site pages
│   └── styles/           # Global styles
├── tina/                 # TinaCMS configuration
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # TailwindCSS configuration
└── package.json          # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   # If using Git
   git clone <repository-url>
   cd mw-brady-law-website
   
   # Or extract the downloaded ZIP file
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Website: http://localhost:4321
   - TinaCMS Admin: http://localhost:4321/admin

### Development Commands

```bash
# Start development server with TinaCMS
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# TinaCMS only (for content editing)
npm run tina:dev
```

## 📝 Content Management

### Using TinaCMS

1. **Start the development server**: `npm run dev`
2. **Access the admin panel**: Navigate to `/admin` in your browser
3. **Edit content**: Use the visual editor to modify pages and practice areas
4. **Save changes**: All changes are automatically saved to Git

### Content Collections

#### Practice Areas
Located in `src/content/practice-areas/`, each practice area is a Markdown file with frontmatter:

```markdown
---
title: "Practice Area Name"
description: "Brief description"
slug: "url-slug"
featured: true
order: 1
---

Content goes here...
```

#### Adding New Practice Areas
1. Create a new `.md` file in `src/content/practice-areas/`
2. Use the frontmatter structure above
3. Add content in Markdown format

## 📧 Contact Form Setup

The contact form uses Formspree for handling submissions.

### Current Configuration
- **Form ID**: `xpwzgkqr` (placeholder - needs to be updated)
- **Action URL**: `https://formspree.io/f/xpwzgkqr`
- **Thank You Page**: `/thank-you`

### Setting Up Your Own Formspree Account

1. **Create Formspree Account**: Visit [formspree.io](https://formspree.io)
2. **Create New Form**: Set up a form for your domain
3. **Get Form ID**: Copy the form ID from Formspree dashboard
4. **Update Contact Form**: Replace `xpwzgkqr` in `src/pages/contact.astro` with your form ID
5. **Update Thank You URL**: Change the `_next` hidden field to your domain

### Form Fields
- Full Name (required)
- Email Address (required)
- Phone Number
- Practice Area (dropdown)
- Message (required)

## 🎨 Customization

### Colors and Branding
The site uses a brown/tan color scheme matching the original design. Colors are defined in `tailwind.config.mjs`:

```javascript
colors: {
  primary: {
    700: '#8B5A3C',  // Main brand color
    800: '#6D4530',  // Darker variant
    // ... other shades
  }
}
```

### Typography
- **Primary Font**: Inter (sans-serif)
- **Secondary Font**: Georgia (serif)

### Images
- Place images in the `public/images/` directory
- Reference them in content with `/images/filename.jpg`
- Images are automatically optimized by Astro

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect Repository**: Link your Git repository to Netlify
2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Environment Variables**: Add any required environment variables
4. **Deploy**: Netlify will automatically deploy on Git pushes

### Vercel

1. **Import Project**: Connect your Git repository
2. **Framework**: Select "Astro"
3. **Build Settings**: Usually auto-detected
4. **Deploy**: Automatic deployments on Git pushes

### Other Static Hosts

The built site in the `dist/` folder can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- DigitalOcean Spaces
- Your own server

## 🔧 Configuration

### Astro Configuration
Main configuration in `astro.config.mjs`:
- Integrations (TailwindCSS, React, Sitemap)
- Build settings
- Development server options

### TinaCMS Configuration
CMS configuration in `tina/config.ts`:
- Content collections
- Field definitions
- Admin interface settings

## 📱 Mobile Optimization

The site is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized images for different screen sizes
- Fast loading on mobile networks

## 🔍 SEO Features

- **Meta Tags**: Automatic generation of meta tags
- **Sitemap**: Auto-generated XML sitemap
- **Structured Data**: Schema markup for law firm
- **Open Graph**: Social media sharing optimization
- **Fast Loading**: Optimized for Core Web Vitals

## 🛡 Security

- **Static Site**: No server-side vulnerabilities
- **Form Security**: Formspree handles form security
- **HTTPS**: Secure by default on modern hosting platforms
- **No Database**: Content stored in Git, no database to secure

## 📞 Support and Maintenance

### Regular Updates
- Keep dependencies updated: `npm update`
- Monitor for security updates
- Update content regularly through TinaCMS

### Backup
- Content is automatically backed up in Git
- Export form submissions from Formspree regularly
- Keep local copies of important assets

### Monitoring
- Set up uptime monitoring
- Monitor form submissions
- Check site performance regularly

## 🤝 Contributing

### Making Changes
1. Create a new branch for changes
2. Make modifications
3. Test locally with `npm run dev`
4. Build and test with `npm run build`
5. Commit and push changes
6. Deploy automatically triggers

### Content Updates
- Use TinaCMS admin interface for content changes
- Direct file editing for advanced users
- All changes tracked in Git history

## 📄 License

This project is proprietary to MW Brady Law. All rights reserved.

## 📞 Contact

For technical support or questions about this website:
- **Law Firm**: MW Brady Law
- **Phone**: (708) 532-3655
- **Email**: info@mwbradylaw.com

---

Built with ❤️ using modern web technologies for MW Brady Law.
