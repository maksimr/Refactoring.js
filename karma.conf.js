module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'sinon-expect'],
        files: [
            'test/mocha-global.js',
            'test/**/*.js'
        ],
        browsers: ['PhantomJS'],
        autoWatch: true,
        singleRun: true
    });
};
