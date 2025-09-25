// Tarteaucitron.js configuration for Averonix
(function() {
    "use strict";
    
    // Initialize Tarteaucitron with GDPR-compliant settings
    tarteaucitron = {
        "privacyUrl": "/privacy-policy.html",
        "bodyPosition": "bottom",
        "hashtag": "#tarteaucitron",
        "cookieName": "tarteaucitron",
        "orientation": "middle",
        "groupServices": false,
        "showDetailsOnClick": true,
        "serviceDefaultState": "wait",
        "showAlertSmall": false,
        "cookieslist": true,
        "closePopup": false,
        "showIcon": true,
        "iconPosition": "BottomRight",
        "adblocker": false,
        "DenyAllCta": true,
        "AcceptAllCta": true,
        "highPrivacy": true,
        "handleBrowserDNTRequest": true,
        "removeCredit": false,
        "moreInfoLink": true,
        "useExternalCss": false,
        "useExternalJs": false,
        "readmoreLink": "/privacy-policy.html",
        "mandatory": true,
        "mandatoryCta": true,
        "cookieDomain": ".averonix.lat"
    };
    
    // Initialize Tarteaucitron
    (tarteaucitron.job = tarteaucitron.job || []).push('tarteaucitronInit');
    
    // Google Analytics configuration (replace with your actual GA4 ID)
    // tarteaucitron.user.analyticsUa = 'G-XXXXXXXXXX'; // Replace with your actual Google Analytics ID
    // tarteaucitron.user.analyticsMore = function () { /* add here your optionnal ga.push() */ };
    // (tarteaucitron.job = tarteaucitron.job || []).push('analytics');
    
    // Google Tag Manager configuration (replace with your actual GTM ID)
    // tarteaucitron.user.gtagUa = 'G-XXXXXXXXXX'; // Replace with your actual Google Analytics ID
    // (tarteaucitron.job = tarteaucitron.job || []).push('gtag');
    
    // Facebook Pixel configuration (if needed)
    // tarteaucitron.user.facebookpixelId = 'YOUR_PIXEL_ID';
    // (tarteaucitron.job = tarteaucitron.job || []).push('facebookpixel');
    
    // Google Fonts configuration
    (tarteaucitron.job = tarteaucitron.job || []).push('googlefonts');
    
    // YouTube configuration (if you embed videos)
    // tarteaucitron.user.youtubePrivacy = true;
    // (tarteaucitron.job = tarteaucitron.job || []).push('youtube');
    
    // Custom services can be added here
    // Example: Custom service for Paddle payment processing
    tarteaucitron.user.paddle = {
        "key": "paddle",
        "type": "ads",
        "name": "Paddle",
        "uri": "https://paddle.com/privacy/",
        "needConsent": true,
        "cookies": ['paddlejs_customer_id', 'paddlejs_checkout_token'],
        "js": function () {
            "use strict";
            // Paddle is already loaded in checkout page
            console.log('Paddle consent given');
        }
    };
    (tarteaucitron.job = tarteaucitron.job || []).push('paddle');
    
})();
