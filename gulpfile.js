var gulp = require('gulp'), 
    watch = require('gulp-watch'),
    postcss =require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    browserSync = require('browser-sync').create();

gulp.task('default', function(){
    console.log("Hooray - You've created a Gulp task!");
});

gulp.task('html', function(){
    console.log("Imagine changing your life through coding!");
});

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport,cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app",
           index: "index.html",
           browser: "google-chrome"
        }
    });
});

gulp.task('watch', function(){
    
    
//    browserSync.init({
//       server : {
//           baseDir: "app",
//           index: "index.html",
//           browser: "google-chrome"
//       } 
//   });
    
    watch('./app/index.html',function(){
        gulp.start('html');
        
    });
    
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
        
    });
    
});