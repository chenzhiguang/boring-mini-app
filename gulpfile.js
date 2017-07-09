"use strict"

require( 'require-dir' )( './gulp_tasks');
var gulp  = require( "gulp" );
gulp.task( 'default', [ 'pug', 'scss', 'ts', 'cp' ] );
