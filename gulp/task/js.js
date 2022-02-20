import webpack from "webpack-stream"
//JS
const js = () => {
    return $.gulp.src($.path.js.src, { sourcemaps: $.app.isDev })
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: 'JS',
                message: error.message
            }))
        }))
        .pipe($.gp.babel())
        .pipe(webpack($.app.webpack))
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size)))
        .pipe($.gp.if($.app.isProd, $.gp.uglify()))
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size)))
        .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }))
        .pipe($.browserSync.stream())
}

export default js;