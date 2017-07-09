'use strict';

var gulp         = require( "gulp" );
var sass         = require( 'gulp-sass' );
//var sourcemaps   = require( 'gulp-sourcemaps' );
var errorHandler = require( './error-handler.js' );
var extname     = require('gulp-extname');


gulp.task( 'scss', function () {
  return scssToCss( "./src/**/!(_)*.scss", "./dist" );
} );

function scssToCss ( srcFiles, destPath, srcOptions ) {
  return gulp.src( srcFiles, srcOptions||null )
    //.pipe( sourcemaps.init() )
    .pipe( errorHandler.start() )
    .pipe( sass().on( 'error', sass.logError ) )
    .pipe( errorHandler.stop() )
    //.pipe( sourcemaps.write() )
    .pipe(extname('wxss'))
    .pipe( gulp.dest( destPath ) );
}
