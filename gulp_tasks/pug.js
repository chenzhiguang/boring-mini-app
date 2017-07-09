'use strict';

var gulp          = require( "gulp" );
var rename        = require('gulp-rename');
var pug           = require( "gulp-pug" );
var errorHandler  = require( './error-handler.js' );

gulp.task( 'pug', function() {
  return pugToTemplate(
    "./src/**/!(_)*.pug",
    "./dist",
    { extname: ".wxml" }
  );
} );



// 支持rename
function pugToTemplate ( srcFiles, destPath, renameOptions ) {
  var promise;

  promise = gulp.src( srcFiles )
    .pipe( errorHandler.start() )
    .pipe( pug( { pretty: true, doctype: 'html' } ) )
    .pipe( errorHandler.stop() );

  if( renameOptions ) {
    promise = promise.pipe(rename( renameOptions ) );
  }

  promise.pipe( gulp.dest( destPath ) );

  return promise;
}
