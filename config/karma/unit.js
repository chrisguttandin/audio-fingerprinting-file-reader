'use strict';

module.exports = function (config) {

    config.set({

        basePath: '../../',

        browsers: [
            'ChromeCanary',
            'FirefoxDeveloper'
        ],

        files: [
            'src/module.js',
            {
                included: false,
                pattern: 'test/fixtures/**',
                served: true,
                watched: true,
            },
            'test/integration/**/*.js'
        ],

        frameworks: [
            'browserify',
            'leche',
            'mocha',
            'sinon-chai' // implicitly uses chai too
        ],

        preprocessors: {
            'src/module.js': 'browserify',
            'test/integration/**/*.js': 'browserify'
        }

    });

};
