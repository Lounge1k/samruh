'use strict';

var gulp = require('gulp');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('watch', ['wiredep'],
    function () {
        gulp.watch('app/less/**/*.less', ['styles']);
        gulp.watch('app/scripts/**/*.js', ['scripts']);
        gulp.watch('app/images/**/*', ['images']);
        gulp.watch('bower.json', ['wiredep']);
    });