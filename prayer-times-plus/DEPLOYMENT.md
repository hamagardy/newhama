# Deployment Guide for Prayer Times Plus Website

## Quick Start

Your website is ready to deploy to: `https://www.hamagardy.com/prayer-times-plus`

## Files to Upload

Upload these files to your web server:

```
prayer-times-plus/
├── index.html
├── styles.css
├── script.js
├── app-version.json
├── generate-screenshots.html (for creating images)
├── app-icon.png (your app icon)
├── app-screenshot.png (hero image)
├── screenshot-1.png
├── screenshot-2.png
├── screenshot-3.png
├── screenshot-4.png
├── favicon.png
└── og-image.png (for social media sharing)
```

## Step-by-Step Deployment

### 1. Generate Screenshots

1. Open `generate-screenshots.html` in your browser
2. Take screenshots of each phone mockup
3. Save them as:
   - `app-screenshot.png` (hero image)
   - `screenshot-1.png` (Prayer Times)
   - `screenshot-2.png` (Quran)
   - `screenshot-3.png` (Qibla)
   - `screenshot-4.png` (Tasbih)

### 2. Add Your App Icon

Replace the 🕌 emoji in the screenshots with your actual app icon:
- Use your app icon from `assets/images/ios/iTunesArtwork@2x.png`
- Resize to 512x512px
- Save as `app-icon.png`
- Also create a 64x64px version for `favicon.png`

### 3. Update Store URLs

Edit `app-version.json`:

```json
{
  "ios": {
    "appStoreUrl": "https://apps.apple.com/app/idYOUR_APP_ID"
  },
  "android": {
    "playStoreUrl": "https://play.google.com/store/apps/details?id=com.prayertimesplus"
  }
}
```

### 4. Upload to Server

Using FTP, SFTP, or your hosting control panel:

1. Connect to your server
2. Navigate to `/prayer-times-plus/` directory
3. Upload all files
4. Set permissions (usually 644 for files, 755 for directories)

### 5. Test the Website

Visit: `https://www.hamagardy.com/prayer-times-plus`

Check:
- ✅ All images load correctly
- ✅ Download buttons link to correct stores
- ✅ Navigation works smoothly
- ✅ Mobile responsive design
- ✅ Privacy policy displays correctly

### 6. Test Version Check

In your React Native app:

1. The app will automatically check: `https://www.hamagardy.com/prayer-times-plus/app-version.json`
2. Test by changing version numbers in `app-version.json`
3. Verify update alerts appear correctly

## Version Management

### Release New Version

When releasing version 1.1.0:

1. Update `app-version.json`:
```json
{
  "version": "1.1.0",
  "latestVersion": "1.1.0",
  "ios": {
    "version": "1.1.0"
  },
  "android": {
    "version": "1.1.0"
  }
}
```

2. Add to features array:
```json
{
  "features": [
    {
      "version": "1.1.0",
      "date": "2026-06-01",
      "changes": {
        "en": [
          "New feature 1",
          "Bug fix 2"
        ],
        "ku": [
          "تایبەتمەندی نوێ ١",
          "چاککردنی هەڵە ٢"
        ]
      }
    }
  ]
}
```

### Force Update

To force all users to update:

```json
{
  "version": "1.2.0",
  "minVersion": "1.2.0",
  "forceUpdate": true
}
```

### Maintenance Mode

To enable maintenance mode:

```json
{
  "maintenance": {
    "isActive": true,
    "message": {
      "en": "App is under maintenance. Please try again later.",
      "ku": "بەرنامەکە لە ژێر چاککردنەوەدایە"
    },
    "estimatedEndTime": "2026-05-15T10:00:00Z"
  }
}
```

## SEO Optimization

### Add to Google Search Console

1. Go to https://search.google.com/search-console
2. Add property: `https://www.hamagardy.com/prayer-times-plus`
3. Verify ownership
4. Submit sitemap (optional)

### Add Google Analytics

Add to `<head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## SSL Certificate

Ensure your website has HTTPS enabled:
- Most hosting providers offer free SSL certificates
- Use Let's Encrypt if manual setup needed
- The app requires HTTPS for version check

## Backup

Regular backups recommended:
- `app-version.json` (critical for app updates)
- All website files
- Store URLs and configuration

## Troubleshooting

### Images Not Loading

- Check file names match exactly (case-sensitive)
- Verify file permissions (644)
- Check file paths in HTML

### Version Check Not Working

- Verify JSON is valid: https://jsonlint.com
- Check CORS headers allow app domain
- Test URL directly in browser

### Download Links Not Working

- Update store URLs in `app-version.json`
- Verify apps are published in stores
- Test links in different browsers

## Support

For deployment issues:
- Email: support@hamagardy.com
- Check server logs for errors
- Test in browser developer console

## Next Steps

After deployment:

1. ✅ Test website on mobile devices
2. ✅ Submit to Google Search Console
3. ✅ Add Google Analytics
4. ✅ Share on social media
5. ✅ Monitor version check logs
6. ✅ Update regularly with new features

## Security

- Keep `app-version.json` updated
- Monitor for unauthorized changes
- Use strong FTP/SFTP passwords
- Enable 2FA on hosting account
- Regular security updates

---

**Website URL:** https://www.hamagardy.com/prayer-times-plus
**Version Check URL:** https://www.hamagardy.com/prayer-times-plus/app-version.json
**Support Email:** support@hamagardy.com
