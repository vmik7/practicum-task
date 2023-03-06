module.exports = {
    plugins: {
        'hermione-storybook/plugin': {
            enabled: true,
            storybookUrl: 'http://localhost:6006',
        },

        // other hermione plugins...
    },
    sets: {
        desktop: {
            files: 'tests/desktop',
        },
    },

    browsers: {
        chrome: {
            automationProtocol: 'devtools',
            desiredCapabilities: {
                browserName: 'chrome',
            },
        },
    },
};
