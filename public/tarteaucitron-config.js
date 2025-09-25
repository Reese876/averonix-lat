// Tarteaucitron.js configuration for Averonix
(function() {
    "use strict";
    
    // Wait for Tarteaucitron to be loaded
    function initTarteaucitron() {
        if (typeof tarteaucitron === 'undefined') {
            setTimeout(initTarteaucitron, 100);
            return;
        }
        
        // Initialize Tarteaucitron with proper init() method
        tarteaucitron.init({
        "privacyUrl": "/privacy-policy.html",
        "bodyPosition": "bottom",
        "hashtag": "#tarteaucitron",
        "cookieName": "tarteaucitron",
        "orientation": "bottom",
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
    });
    
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
    
    // Add Google Fonts
    (tarteaucitron.job = tarteaucitron.job || []).push('googlefonts');
    
    // Add Paddle service for payment processing
    tarteaucitron.user.paddle = {
        "key": "paddle",
        "type": "ads",
        "name": "Paddle",
        "uri": "https://paddle.com/privacy/",
        "needConsent": true,
        "cookies": ['paddlejs_customer_id', 'paddlejs_checkout_token'],
        "js": function () {
            "use strict";
            console.log('Paddle consent given');
        }
        };
        (tarteaucitron.job = tarteaucitron.job || []).push('paddle');
    }
    
    // Start initialization
    initTarteaucitron();
    
})();
