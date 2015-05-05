module.exports = function(grunt) {
    //Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
            },
            build: {
                src: 'client/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular/angular-csp.css",
                    "bootstrap/dist/css/bootstrap.css",
                    "bootstrap/dist/css/bootstrap.css.map",
                    "bootstrap/dist/css/bootstrap-theme.css",
                    "bootstrap/dist/css/bootstrap-theme.css.map"
                ],
                "dest": "server/public/vendors/"
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: "client/",
                src: [
                    "styles.css"
                ],
                "dest": "server/public/assets/styles"
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Default task(s)
    grunt.registerTask('default', ['copy', 'uglify']);
};