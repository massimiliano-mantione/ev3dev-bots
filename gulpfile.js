var gulp = require('gulp');  
var sourcemaps = require('gulp-sourcemaps');  
var ts = require('gulp-typescript');  
var babel = require('gulp-babel');

var tsProject = ts.createProject('./tsconfig.json');

gulp.task('default', function() {  
  return tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(babel({
      plugins: ["transform-runtime"],
      presets: ["es2015"]
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('lib'));
});
