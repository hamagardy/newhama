# Website Setup Instructions

## Quick Start (5 minutes)

### Step 1: Add Your App Screenshot & Icon
1. **Screenshot**: Take a screenshot of your app on iPhone
   - Rename it to `screenshot.png`
   - Place it in the `website` folder
   - See `ADD_SCREENSHOT.md` for detailed instructions
2. **Icon**: Copy your app icon from `assets/images/AppIcon~ios-marketing.png`
   - Already done! ✅ (`icon.png` and `favicon.png`)

### Step 2: Update Contact Email
Open `privacy.html` and find/replace:
- `admin@hamagardy.com` → Already updated! ✅

### Step 3: Update App Store Link
Open `index.html` and update line 95:
```html
<a href="https://apps.apple.com/app/id6756564515" class="store-button">
```
Make sure the App ID is correct: `6756564515`

### Step 4: Test Locally
1. Open `index.html` in your browser
2. Click all links to make sure they work
3. Test on mobile (use browser dev tools)
4. Check privacy policy page

### Step 5: Deploy

#### Option A: Netlify (Easiest - Free)
1. Go to https://netlify.com
2. Sign up (free)
3. Drag and drop the entire `website` folder
4. Done! You get a URL like `smokefree.netlify.app`
5. Optional: Add custom domain in settings

#### Option B: Vercel (Also Easy - Free)
1. Go to https://vercel.com
2. Sign up (free)
3. Click "New Project"
4. Upload the `website` folder
5. Deploy!

#### Option C: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository called `smokefree-website`
3. Upload all files from `website` folder
4. Go to Settings → Pages
5. Enable GitHub Pages
6. Your site will be at `yourusername.github.io/smokefree-website`

## What You Get

✅ **Landing Page** (`index.html`)
- Hero section with app description
- Features showcase
- How it works section
- Download buttons
- Responsive design

✅ **Privacy Policy** (`privacy.html`)
- Complete GDPR-compliant policy
- All required sections
- Easy to navigate
- Matches app theme

✅ **Professional Design**
- Matches your app colors (#10B981 green)
- Smooth animations
- Mobile responsive
- Fast loading

## Customization

### Change Colors
Edit `styles.css` lines 10-12:
```css
--primary: #10B981;        /* Your main color */
--primary-dark: #059669;   /* Darker shade */
--primary-light: #34D399;  /* Lighter shade */
```

### Add More Features
In `index.html`, find the features section and add:
```html
<div class="feature-card">
    <div class="feature-icon">🎯</div>
    <h3 class="feature-title">New Feature</h3>
    <p class="feature-description">Description here</p>
</div>
```

### Update Stats
In `index.html`, find the hero stats section:
```html
<div class="stat">
    <div class="stat-number">10K+</div>
    <div class="stat-label">Active Users</div>
</div>
```

## Important Notes

1. **Privacy Policy**: The privacy policy is complete but generic. Review it and update:
   - Contact email
   - Company name (if applicable)
   - Any specific data collection practices

2. **App Store Link**: Make sure the App Store link is correct before going live

3. **Images**: Add your actual app icon for a professional look

4. **Domain**: Consider buying a custom domain like `smokefreeapp.com` for better branding

## Need Help?

- Check `README.md` for detailed documentation
- All code is commented for easy understanding
- Test everything locally before deploying

## Checklist Before Going Live

- [x] Added app icon (`icon.png`) ✅
- [x] Added favicon (`favicon.png`) ✅
- [x] Updated contact email in privacy policy ✅
- [ ] Added app screenshot (`screenshot.png`) - See ADD_SCREENSHOT.md
- [ ] Verified App Store link
- [ ] Tested all navigation links
- [ ] Tested on mobile device
- [ ] Checked privacy policy content
- [ ] Deployed to hosting

## After Deployment

1. Test the live site on multiple devices
2. Share the URL in your app (if you have a "Website" link)
3. Add the privacy policy URL to App Store Connect
4. Use the URL in your app's settings for "Privacy Policy"

Your website is ready! 🎉
