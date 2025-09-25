# Tarteaucitron.js Setup for Averonix

This document explains the Tarteaucitron.js cookie consent management implementation on the Averonix website.

## What is Tarteaucitron.js?

Tarteaucitron.js is a GDPR-compliant cookie consent management solution that allows users to control which cookies and tracking scripts are loaded on your website.

## Files Added

### Core Files
- `tarteaucitron.js` - Main Tarteaucitron.js library
- `tarteaucitron.css` - Default styling for the cookie banner
- `tarteaucitron-config.js` - Configuration file with GDPR settings
- `tarteaucitron-custom.css` - Custom styling to match Averonix design

### Test File
- `test-cookies.html` - Test page to verify cookie consent functionality

## Configuration Details

### GDPR Compliance Settings
- **High Privacy Mode**: Enabled for maximum privacy protection
- **Browser DNT Support**: Respects "Do Not Track" browser settings
- **Mandatory Consent**: Users must make a choice before cookies are set
- **Cookie Domain**: Set to `.averonix.lat` for subdomain support

### Available Services
1. **Google Analytics** (commented out - add your GA4 ID)
2. **Google Tag Manager** (commented out - add your GTM ID)
3. **Google Fonts** (enabled)
4. **Paddle** (enabled for payment processing)

## Setup Instructions

### 1. Enable Google Analytics (Optional)
To enable Google Analytics with consent management:

1. Open `tarteaucitron-config.js`
2. Uncomment the Google Analytics section
3. Replace `G-XXXXXXXXXX` with your actual GA4 measurement ID
4. Uncomment the analytics job push line

```javascript
// Uncomment and configure:
tarteaucitron.user.analyticsUa = 'G-YOUR-ACTUAL-ID';
(tarteaucitron.job = tarteaucitron.job || []).push('analytics');
```

### 2. Enable Google Tag Manager (Optional)
To enable Google Tag Manager:

1. Open `tarteaucitron-config.js`
2. Uncomment the GTM section
3. Replace `G-XXXXXXXXXX` with your actual GTM ID
4. Uncomment the gtag job push line

### 3. Add Facebook Pixel (Optional)
To add Facebook Pixel tracking:

1. Open `tarteaucitron-config.js`
2. Uncomment the Facebook Pixel section
3. Replace `YOUR_PIXEL_ID` with your actual Facebook Pixel ID
4. Uncomment the facebookpixel job push line

## Testing the Implementation

### 1. Test Page
Visit `/test-cookies.html` to test the cookie consent functionality:
- Check consent status
- View available services
- Test accept/deny functionality

### 2. Manual Testing
1. Open any page on the website
2. Look for the cookie icon in the bottom-right corner
3. Click the icon to open the consent panel
4. Test different consent options:
   - Accept All
   - Deny All
   - Customize individual services

### 3. Browser Developer Tools
1. Open browser developer tools (F12)
2. Go to Application/Storage tab
3. Check Cookies section
4. Look for `tarteaucitron` cookie
5. Verify consent preferences are stored

## Customization

### Styling
The cookie banner uses custom styling in `tarteaucitron-custom.css` that matches the Averonix brand:
- Primary colors: #4361ee (blue gradient)
- Rounded corners and modern design
- Responsive layout for mobile devices

### Configuration Options
Key configuration options in `tarteaucitron-config.js`:

```javascript
tarteaucitron = {
    "privacyUrl": "/privacy-policy.html",    // Link to privacy policy
    "highPrivacy": true,                     // Maximum privacy protection
    "handleBrowserDNTRequest": true,         // Respect DNT headers
    "mandatory": true,                       // Require user choice
    "cookieDomain": ".averonix.lat"          // Domain for cookie storage
};
```

## Legal Compliance

### GDPR Compliance
- ✅ Explicit consent required
- ✅ Granular consent options
- ✅ Easy withdrawal of consent
- ✅ Clear information about data usage
- ✅ Privacy policy integration

### Cookie Information
- **Cookie Name**: `tarteaucitron`
- **Purpose**: Store user consent preferences
- **Duration**: 12 months
- **Domain**: `.averonix.lat`
- **Type**: First-party cookie

## Troubleshooting

### Common Issues

1. **Cookie banner not appearing**
   - Check browser console for JavaScript errors
   - Verify all files are loaded correctly
   - Clear browser cache and cookies

2. **Styling issues**
   - Ensure `tarteaucitron-custom.css` is loaded after `tarteaucitron.css`
   - Check for CSS conflicts with existing styles

3. **Services not working**
   - Verify service IDs are correct
   - Check that services are properly enabled in config
   - Test with browser developer tools

### Debug Mode
To enable debug mode, add this to your configuration:

```javascript
tarteaucitron.debug = true;
```

## Support

For Tarteaucitron.js documentation and support:
- Official website: https://tarteaucitron.io/
- GitHub repository: https://github.com/AmauriC/tarteaucitron.js

For Averonix-specific issues, contact: info@averonix.lat
