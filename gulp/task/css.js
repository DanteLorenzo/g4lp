//CSS
const css = () => {
    return $.gulp.src($.path.css.src, { sourcemaps: $.app.isDev})
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: 'CSS',
                message: error.message
            }))
        }))
        .pipe($.gp.concat('style.css'))
        .pipe($.gp.cssimport())
        .pipe($.gp.webpCss())
        .pipe($.gp.shorthand())
        .pipe($.gp.groupCssMediaQueries())
        .pipe($.gp.autoprefixer())
        .pipe($.gp.size($.app.size))
        .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev}))
        .pipe($.gp.rename($.app.rename))
        .pipe($.gp.csso())
        .pipe($.gp.size($.app.size))
        .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev}))
        .pipe($.browserSync.stream())
}

export default css;