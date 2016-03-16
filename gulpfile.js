var gulp = require('gulp');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require ('gulp-autoprefixer');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var webpack = require('webpack-stream');
var babelloader = require('babel-loader');
var reactrouter = require('react-router');
var historyApiFallback = require('connect-history-api-fallback');

gulp.task('compile-react', function() {
	return gulp.src('./src/main.jsx')
    .pipe(plumber())
    .pipe(webpack({
		output: {
			filename: 'main.js'
		},
		debug: true,
		devtool: 'inline-source-map',
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules)/,
					loader: 'babel-loader',
					query: {
						presets: ['react', 'es2015']
					}
				}
			]
		}
	}))
		.pipe(gulp.dest('./build'));
});

gulp.task('sass', function() {
  gulp.src('./src/styles/style.scss')
    .pipe(sass())
    .pipe(autoprefixer({
       browsers: ['last 2 versions']
    }))
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./build'));
});

gulp.task('copy-html', function(){
  gulp.src('./src/index.html')
  .pipe(gulp.dest('./build'));
});

gulp.task('browser-sync', ['compile-react'], function() {
	browserSync.init({
		server: {
      baseDir: 'build',
      middleware: [historyApiFallback()]
    }
	});
  gulp.watch('./src/index.html', ['copy-html']);
	gulp.watch('./src/main.jsx', ['compile-react']);
	gulp.watch('./src/components/*.jsx', ['compile-react']);
	gulp.watch(['./src/styles/*.scss'], ['sass']);
	gulp.watch(['./build/main.js', './build/style.min.css','./build/index.html']).on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);
