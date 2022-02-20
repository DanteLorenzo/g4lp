//PUG
const pug = () => {
    return $.gulp.src($.path.pug.src)
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: 'PUG',
                message: error.message
            }))
        }))
        .pipe($.gp.pug($.app.pug))
        .pipe($.gp.webpHtmlNosvg())
        .pipe($.gp.if($.app.isDev, $.gp.htmlBeautify()))
        .pipe($.gulp.dest($.path.pug.dest))
        .pipe($.browserSync.stream())
}

export default pug;