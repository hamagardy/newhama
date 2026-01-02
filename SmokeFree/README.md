# SmokeFree Landing Page

Beautiful, responsive landing page for the SmokeFree app with integrated privacy policy.

## Features

- ✅ Modern, clean design matching app theme (#10B981 green)
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Complete privacy policy page
- ✅ Smooth animations and transitions
- ✅ SEO optimized
- ✅ Fast loading
- ✅ No dependencies (vanilla HTML/CSS/JS)

## Files

- `index.html` - Main landing page
- `privacy.html` - Privacy policy page
- `styles.css` - All styles with app theme colors
- `script.js` - Smooth scrolling and animations
- `icon.png` - App icon (add your app icon here)
- `favicon.png` - Browser favicon (add your favicon here)

## Setup

1. **Add Images**:
   - Replace `icon.png` with your app icon (recommended: 512x512px)
   - Replace `favicon.png` with your favicon (recommended: 32x32px or 64x64px)

2. **Update Links**:
   - Update App Store link in `index.html` (line with `apps.apple.com`)
   - Update contact email in `privacy.html` (currently: support@smokefreeapp.com)

3. **Deploy**:
   - Upload all files to your web hosting
   - Or use free hosting: Netlify, Vercel, GitHub Pages

## Deployment Options

### Option 1: Netlify (Recommended)
1. Create account at netlify.com
2. Drag and drop the `website` folder
3. Done! You get a free URL like `smokefree.netlify.app`

### Option 2: Vercel
1. Create account at vercel.com
2. Import the `website` folder
3. Deploy with one click

### Option 3: GitHub Pages
1. Create a GitHub repository
2. Upload files to the repository
3. Enable GitHub Pages in settings
4. Access at `yourusername.github.io/repo-name`

### Option 4: Custom Domain
1. Buy a domain (e.g., smokefreeapp.com)
2. Use any hosting provider
3. Upload files via FTP or hosting panel

## Customization

### Colors
All colors are defined in `styles.css` at the top:
```css
:root {
    --primary: #10B981;        /* Main green color */
    --primary-dark: #059669;   /* Darker green */
    --primary-light: #34D399;  /* Lighter green */
}
```

### Content
- Edit text directly in `index.html` and `privacy.html`
- All sections are clearly labeled with comments

### Features
Add more features in the features grid:
```html
<div class="feature-card">
    <div class="feature-icon">🎯</div>
    <h3 class="feature-title">Your Feature</h3>
    <p class="feature-description">Description here</p>
</div>
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance

- No external dependencies
- Optimized images recommended
- Fast loading time
- Mobile-first design

## SEO

The site includes:
- Meta descriptions
- Semantic HTML
- Proper heading hierarchy
- Alt text for images (add when you add images)

## Privacy Policy

The privacy policy is complete and includes:
- All required sections
- GDPR compliance
- US state privacy laws
- Contact information
- User rights

**Important**: Update the contact email in `privacy.html` before going live!

## Support

For questions or issues with the website, contact the developer or refer to the code comments.

## License

This landing page is part of the SmokeFree app project.
