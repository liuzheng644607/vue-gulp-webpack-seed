const gulp = require('gulp');
const webpack = require('webpack-stream');
const named = require('vinyl-named');
const webpackConfig = require('./webpack.config.js');
const clean = require('gulp-clean');

gulp.task('default', ['clean'], function() {
    return gulp
        .src('src/index.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/'));
});

gulp.task('clean', function() {
    return gulp.src('./dist/*').pipe(clean());
});
