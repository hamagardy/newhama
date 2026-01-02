# How to Add Your App Screenshot

## Quick Steps:

1. **Take a screenshot** of your app on an iPhone
   - Open your app on a real device or simulator
   - Take a screenshot (Home + Power button on iPhone)
   - Or use screenshots from App Store Connect

2. **Save the screenshot** as `appscreen.png` in the `website` folder
   - Recommended size: 1170 x 2532 pixels (iPhone screenshot)
   - Or any iPhone screenshot size will work

3. **That's it!** The website is already configured to use `appscreen.png`

## Current Setup:

The landing page (`index.html`) is already configured to display:
```html
<img src="appscreen.png" alt="SmokeFree App Screenshot" class="phone-screenshot">
```

The CSS will automatically:
- Display it in a nice phone frame
- Scale it properly
- Add shadows and styling
- Make it responsive on mobile

## If You Don't Have a Screenshot Yet:

The website will show a broken image icon until you add `appscreen.png`. 

To temporarily hide it while you prepare the screenshot:
1. Open `website/index.html`
2. Find the `<div class="hero-image">` section
3. Comment it out or remove it temporarily

## Tips for Best Results:

- Use a clean screenshot showing your app's main features
- Make sure the screenshot is from the latest version
- iPhone screenshots work best (they have the right aspect ratio)
- You can use multiple screenshots later if you want a carousel

## Where to Get Screenshots:

1. **From your iPhone**: Take a screenshot while using the app
2. **From Simulator**: Cmd+S in iOS Simulator
3. **From App Store Connect**: Download your submitted screenshots
4. **From TestFlight**: Take screenshots while testing

Once you add `appscreen.png` to the `website` folder, refresh your browser to see it!
