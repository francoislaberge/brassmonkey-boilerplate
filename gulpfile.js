var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    open = require('open'),
    connect = require('connect');

var port = 8080;

gulp.task('jshint', function() {

  gulp.src(['script/**/*.js', 'scheme/script/**/*.js'])
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));

});

gulp.task('launchdev', function() {

  connect()
    .use(connect.static(__dirname))
    .listen(port);
  open('http://localhost:' + port);

});

gulp.task('default', function() {

  gulp.run('jshint');

});