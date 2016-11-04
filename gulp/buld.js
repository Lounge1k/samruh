'use strict';

var gulp = require('gulp');
var gutil = require('gulp-load-utils')(['log']);
var inject = require('gulp-inject');
var $ = require('gulp-load-plugins')();

var handleError = function (err) {
  console.log(err.name, ' in ', err.plugin, ': ', err.message);
  console.log(err.getStack());
  process.exit(1);
};

gulp.task('index', function () {
  var target = gulp.src('./index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./app/scripts/*.js', './app/less/*.css'], {read: false});

  return target.pipe(inject(sources))
      .pipe(gulp.dest('./'));
});

gulp.task('styles', function() {

  var lessFilter = $.filter([
    "main.less"
  ])

  return gulp.src([
    '.tmp/**/*.css',
    'app/less/main.less'
  ])
  .pipe(lessFilter)
  .pipe($.print())
  .pipe($.less())
  .pipe($.print())
  .pipe(lessFilter.restore())
  .pipe(gulp.dest('.tmp/styles'))
  .pipe($.size());
});

gulp.task('clean', function () {
  return gulp.src(['.tmp', 'dist'], { read: false }).pipe($.clean());
});

gulp.task('build', ['styles','index']);