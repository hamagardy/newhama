# Prayer Times Plus Website

This is the official website for the Prayer Times Plus mobile application.

## Features

- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **RTL Support**: Full right-to-left support for Kurdish language
- **Version Check System**: JSON-based version checking for force updates
- **Privacy Policy**: Complete privacy policy in Kurdish and English
- **Feature Showcase**: All app features displayed with icons
- **Download Links**: Direct links to App Store and Google Play

## Files Structure

```
website/
├── index.html              # Main HTML file
├── styles.css              # CSS styles
├── script.js               # JavaScript functionality
├── app-version.json        # Version check configuration
├── README.md              # This file
├── app-icon.png           # App icon (512x512px)
├── app-screenshot.png     # Hero screenshot
├── screenshot-1.png       # Feature screenshot 1
├── screenshot-2.png       # Feature screenshot 2
├── screenshot-3.png       # Feature screenshot 3
├── screenshot-4.png       # Feature screenshot 4
└── favicon.png            # Website favicon
```

## Setup Instructions

### 1. Update App Store URLs

Edit `app-version.json` and update the store URLs:

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

### 2. Add Images

Add the following images to the website folder:

- `app-icon.png` - Your app icon (512x512px)
- `app-screenshot.png` - Main hero screenshot (1080x2340px)
- `screenshot-1.png` to `screenshot-4.png` - Feature screenshots
- `favicon.png` - Website favicon (32x32px or 64x64px)

### 3. Deploy to Web Server

Upload all files to your web server. The website should be accessible at:
```
https://prayertimesplus.com
```

### 4. Configure Version Check in App

The app will automatically check for updates by fetching:
```
https://prayertimesplus.com/app-version.json
```

## Version Check System

### How It Works

1. App checks `app-version.json` every 24 hours
2. Compares current version with `minVersion` and `version`
3. Shows update alert if needed
4. Forces update if current version < `minVersion`

### Update app-version.json

When releasing a new version:

```json
{
  "version": "1.1.0",           // Latest version
  "minVersion": "1.0.0",        // Minimum supported version
  "forceUpdate": false,         // Force all users to update
  "ios": {
    "version": "1.1.0",
    "minVersion": "1.0.0",
    "forceUpdate": false
  },
  "android": {
    "version": "1.1.0",
    "minVersion": "1.0.0",
    "forceUpdate": false
  }
}
```

### Force Update Scenarios

**Scenario 1: Optional Update**
```json
{
  "version": "1.1.0",
  "minVersion": "1.0.0",
  "forceUpdate": false
}
```
- Users on 1.0.0+ can continue using app
- Update notification shown but dismissible

**Scenario 2: Force Update**
```json
{
  "version": "1.2.0",
  "minVersion": "1.2.0",
  "forceUpdate": true
}
```
- Users on < 1.2.0 MUST update
- Update alert cannot be dismissed
- App redirects to store

**Scenario 3: Maintenance Mode**
```json
{
  "maintenance": {
    "isActive": true,
    "message": {
      "ku": "بەرنامەکە لە ژێر چاککردنەوەدایە"
    }
  }
}
```
- All users see maintenance message
- App functionality may be limited

### Announcements

Add announcements to notify users:

```json
{
  "announcements": [
    {
      "id": "ramadan-2026",
      "title": {
        "ku": "ڕەمەزان پیرۆز"
      },
      "message": {
        "ku": "ڕەمەزانێکی پیرۆزتان لێ دەخوازین"
      },
      "type": "info",
      "showOnce": true,
      "priority": 1
    }
  ]
}
```

## Customization

### Colors

Edit `styles.css` to change the color scheme:

```css
/* Primary green color */
background: linear-gradient(135deg, #7FB685 0%, #5A9461 100%);
```

### Content

Edit `index.html` to update:
- App name and description
- Features list
- Privacy policy
- Contact information

### Languages

The website supports Kurdish (RTL) by default. To add English:

1. Create `index-en.html`
2. Set `dir="ltr"` in HTML tag
3. Translate all content
4. Add language switcher

## SEO Optimization

The website includes:
- Meta descriptions
- Keywords
- Semantic HTML
- Mobile-friendly design
- Fast loading times

### Add Google Analytics

Add to `<head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Testing

### Test Version Check

1. Change version in `app-version.json`
2. Open app
3. Verify update alert appears
4. Test force update flow

### Test Website

1. Open in different browsers
2. Test on mobile devices
3. Verify all links work
4. Check responsive design

## Support

For issues or questions:
- Email: support@prayertimesplus.com
- Website: https://prayertimesplus.com

## License

© 2026 Prayer Times Plus. All rights reserved.
