module.exports = {
    chromeDockerArgs: [
        '--security-opt=seccomp=unconfined',
    ],
    configurations: {
        'chrome.laptop': {
            target: 'chrome.docker',
            width: 1366, // 66
            height: 768,
        },
        'chrome.iphone7': {
            target: 'chrome.docker',
            preset: 'iPhone 7',
        },
    },
};
