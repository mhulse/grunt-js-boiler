/*global module:false */

module.exports = function(grunt) {
	
	'use strict';
	
	grunt.initConfig({
		
		pkg : grunt.file.readJSON('package.json'),
		
		/*----------------------------------( META )----------------------------------*/
		
		meta : {
			
			banner_long : '/**\n' +
			              ' * <%= pkg.title || pkg.name %>\n' +
			              '<%= pkg.description ? " * " + pkg.description + "\\n" : "" %>' +
			              ' *\n' +
			              '<%= pkg.author.name ? " * @author " + pkg.author.name + "\\n" : "" %>' +
			              '<%= pkg.author.url ? " * @link " + pkg.author.url + "\\n" : "" %>' +
			              '<%= pkg.homepage ? " * @docs " + pkg.homepage + "\\n" : "" %>' +
			              ' * @copyright Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>.\n' +
			              '<%= pkg.licenses ? " * @license Released under the " + _.pluck(pkg.licenses, "type").join(", ") + ".\\n" : "" %>' +
			              '<%= pkg.version ? " * @version " + pkg.version + "\\n" : "" %>' +
			              ' * @date <%= grunt.template.today("yyyy/mm/dd") %>\n' +
			              ' */\n\n',
			
			banner_short : '/*! ' +
			               '<%= pkg.title || pkg.name %>' +
			               '<%= pkg.version ? " v" + pkg.version : "" %>' +
			               '<%= pkg.licenses ? " | " + _.pluck(pkg.licenses, "type").join(", ") : "" %>' +
			               '<%= pkg.homepage ? " | " + pkg.homepage : "" %>' +
			               ' */'
			
		},
		
		/*----------------------------------( WATCH )----------------------------------*/
		
		/**
		 * Run predefined tasks whenever watched file patterns are added, changed
		 * or deleted.
		 *
		 * $ grunt watch
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-watch
		 */
		
		watch : {
			
			tmpl : {
				
				files : [
					
					'./src/jquery.<%= pkg.name %>.js',
					'../demo/**/*'
					
				],
				
				tasks : ['default']
				
			}
			
		},
		
		/*----------------------------------( PREFLIGHT )----------------------------------*/
		
		/**
		 * Validate files with JSHint.
		 *
		 * @see http://www.jshint.com/
		 * @see https://github.com/gruntjs/grunt-contrib-jshint
		 * @see https://github.com/jshint/jshint/blob/master/src/stable/jshint.js
		 * @see http://www.jshint.com/docs/
		 */
		
		jshint : {
			
			options : {
				
				jshintrc : '.jshintrc'
				
			},
			
			init : [
				
				'./Gruntfile.js',
				'./src/jquery.<%= pkg.name %>.js'
				
			]
			
		},
		
		/*----------------------------------( 01 )----------------------------------*/
		
		/**
		 * Clean files and folders.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-clean
		 */
		
		clean : {
			
			options : {
				
				force : true // Sketchy!
				
			},
			
			dist : [
				
				'../<%= pkg.name %>/**/*'
				
			]
			
		},
		
		/*----------------------------------( 02 )----------------------------------*/
		
		/**
		 * Minify files with UglifyJS.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-uglify
		 * @see http://lisperator.net/uglifyjs/
		 */
		
		uglify : {
			
			target : {
				
				options : {
					
					banner : '<%= meta.banner_short %>'
					
				},
				
				files : {
					
					'../<%= pkg.name %>/jquery.<%= pkg.name %>.min.js': ['./src/jquery.<%= pkg.name %>.js']
					
				}
				
			}
			
		},
		
		/*----------------------------------( 03 )----------------------------------*/
		
		/**
		 * Concatenate files.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-concat
		 */
		
		concat : {
			
			options : {
				
				banner : '<%= meta.banner_long %>'
				
			},
			
			dist : {
				
				src : ['./src/jquery.<%= pkg.name %>.js'],
				dest : '../<%= pkg.name %>/jquery.<%= pkg.name %>.js'
				
			}
			
		}
		
	});
	
	//--------------------------------------------------------------------
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	//----------------------------------
	
	grunt.registerTask('default', ['jshint', 'clean', 'uglify', 'concat']);
	
};
