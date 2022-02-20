//IMG
const img = () => {
    return $.gulp.src($.path.img.src) //Source directory
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: 'IMG',
                message: error.message
            }))
        })) //Pop-up windows on errors
        .pipe($.gp.newer($.path.img.dest)) //Passing through only those source files that are newer than corresponding destination files
        .pipe($.gp.webp()) //Convert images to WebP
        .pipe($.gulp.dest($.path.img.dest)) //Destination directory 
        .pipe($.gulp.src($.path.img.src)) //Source directory
        .pipe($.gp.newer($.path.img.dest)) //Passing through only those source files that are newer than corresponding destination files
        .pipe($.gp.if($.app.isProd, $.gp.imagemin($.app.imagemin))) //IMG minifier
        .pipe($.gulp.dest($.path.img.dest)) //Destination directory 
        .pipe($.browserSync.stream()) //Auto-relaod page
}

export default img;