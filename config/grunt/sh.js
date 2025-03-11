module.exports = (grunt) => {
    const continuous = grunt.option('continuous') === true;

    return {
        'build': {
            cmd: 'npm run build'
        },
        'test-integration': {
            cmd: `karma start config/karma/config-integration.js ${continuous ? '--concurrency Infinity' : '--single-run'}`
        }
    };
};
