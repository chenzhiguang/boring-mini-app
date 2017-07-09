"use strict"

var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('./tsconfig.json');

gulp.task( 'ts', function () {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('dist'));
} );
