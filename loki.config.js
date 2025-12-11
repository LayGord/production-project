module.exports = {
    configurations: {
    // Локальные пресеты через Docker
        'chrome.laptop': {
            target: 'chrome.docker',
            width: 1366,
            height: 768,
            deviceScaleFactor: 1,
            mobile: false,
        },
        'chrome.iphone7': {
            target: 'chrome.docker',
            preset: 'iPhone 7',
        },

        // CI-пресеты без Docker
        'chrome-ci.laptop': {
            target: 'chrome.app',
            width: 1366,
            height: 768,
        },
        'chrome-ci.iphone7': {
            target: 'chrome.app',
            preset: 'Iphone 7',
        },
    },
};
