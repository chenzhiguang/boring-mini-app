'use strict';
var gulp  = require( "gulp" );

gulp.task( 'cp', function() {
  gulp
    .src('./src/**/*.{json,png,gif,jpg}')
    .pipe(gulp.dest('./dist/'));
} );
