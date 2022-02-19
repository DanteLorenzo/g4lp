//HTML
const html = () => {
    return $.gulp.src($.path.html.src)
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: 'HTML',
                message: error.message
            }))
        }))
        .pipe($.gp.fileInclude())
        .pipe($.gp.webpHtmlNosvg())
        .pipe($.gp.size($.app.size))
        .pipe($.gp.if($.app.isDev, $.gp.htmlBeautify()))
        .pipe($.gp.htmlmin($.app.htmlmin))
        .pipe($.gp.size($.app.size))
        .pipe($.gulp.dest($.path.html.dest))
        .pipe($.browserSync.stream())
}

export default html;