'use strict';

var num         = 0;
var gulp        = require( "gulp" );
var runSequence = require( 'run-sequence' );
var gutil       = require('gulp-util');


function log( name ) {
  gutil.log( gutil.colors.green( "====> " + name + " updated! [ " + num++ + " ]\n\n" ) );
}


//---------------------
gulp.task( 'watch', [ 'default' ], function() {
  gulp.watch( './src/**/*.pug', function() {
    runSequence( 'pug', function() {
      log( 'templates' );
    } );
  } );

  gulp.watch( './src/**/*.ts', function() {
    runSequence( 'ts', function() {
      log( 'scripts' );
    } );
  } );

  gulp.watch( './src/**/*.scss', function() {
    runSequence( 'scss', function() {
      log( 'styles' );
    } );
  } );

  gulp.watch( './src/**/*.{png,gif,jpg,json}', function() {
    runSequence( 'cp', function() {
      log( 'copy files' );
    } );
  } );
} );
