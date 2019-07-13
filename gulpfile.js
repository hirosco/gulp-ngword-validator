'use strict';

var gulp = require('gulp');
var ngword = require('gulp-ngword-validator');

gulp.task('default',function(){
  return gulp.src(['sample/*'])
    .pipe(ngword('test word'));
});
