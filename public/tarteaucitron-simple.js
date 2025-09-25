// Simple Tarteaucitron.js initialization for Averonix
// This script should be loaded AFTER tarteaucitron.js

(function() {
    "use strict";
    
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        // Wait a bit more for Tarteaucitron to be fully loaded
        setTimeout(function() {
            if (typeof tarteaucitron !== 'undefined') {
                // Configure Tarteaucitron
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
                
                // Add Google Fonts
                (tarteaucitron.job = tarteaucitron.job || []).push('googlefonts');
                
                // Add Paddle service
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
                
                console.log('Tarteaucitron initialized successfully');
            } else {
                console.error('Tarteaucitron not found - check if tarteaucitron.js is loaded');
            }
        }, 500);
    });
})();
