//var gulp = require('gulp'),
//  less = require('gulp-less');
// 
//gulp.task('testLess', function () {
//  //编译src目录下的所有less文件
//  //除了reset.less和test.less（**匹配src/less的0个或多个子文件夹）
//  gulp.src(['src/less/*.less', '!src/less/**/{reset,test}.less']) 
//      .pipe(less())
//      .pipe(gulp.dest('src/css'));
//});

var gulp = require('gulp'),
    less = require('gulp-less');
 
gulp.task('testLess', function () {
    gulp.src(['src/less/*.less','!src/less/extend/{reset,test}.less'])
        .pipe(less())
        .pipe(gulp.dest('src/css'));
});
 
gulp.task('testWatch', function () {
    gulp.watch('src/**/*.less', ['testLess']); //当所有less文件发生改变时，调用testLess任务
});