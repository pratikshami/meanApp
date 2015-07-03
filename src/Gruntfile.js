module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
                  all: ['Gruntfile.js','app.js','Routes/*.js,models/*.js'],
        
        options: {
            reporter: require('jshint-html-reporter'),
            reporterOutput: './JSHintReport/jshint-report.html'
                }
                      },
        nodemon: {
                dev: {
                      script: 'app.js',
                      options:{
                          env: {
                              PORT: '4545'
                              }
                            }
                }
                                } // nodemon
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('default',['jshint','nodemon']);
};

