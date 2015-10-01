/* globals module */
module.exports = function( grunt ) {
	"use strict";

	grunt.loadNpmTasks("grunt-version");
    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks( "grunt-contrib-jshint" );
    grunt.loadNpmTasks( "grunt-jscs" );

	grunt.initConfig( {
	    jscs: {
            src: "./src/**/*.js",
            options: {
                config: ".jscsrc"
            }
        },
        jshint: {
            options: {
                jshintrc: ".jshintrc",
                reporter: require( "jshint-stylish" )
            },
            all: {
                src: [ "Gruntfile.js", "./src{,*/}*.js" ]
            }
        },
	    version: {
	        comments: {
	            options: {
		            prefix: "\\* @version\\s*"
	            },
	            src: [ "src/*.js" ]
	        },
	        defaults: {
		        src: [ "src/*.js", "bower.json" ]
	        }
	    },
	    shell: {
	        build: {
		        command: "node tools/r.js -o tools/build.js"
	        },
	    }
	} );

	var tasks = [ "version", "jscs", "jshint", "version:comments", "shell:build" ];

	grunt.registerTask( "default", tasks );
};
