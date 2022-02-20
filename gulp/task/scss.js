const sass = require('gulp-sass')(require('sass'));

//SCSS
const scss = () => {
    return $.gulp.src($.path.scss.src, { sourcemaps: $.app.isDev})
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: 'SCSS',
                message: error.message
            }))
        }))
        .pipe($.gp.sassGlob())
        .pipe(sass())
        .pipe($.gp.concat('style.css'))
        .pipe($.gp.cssimport())
        .pipe($.gp.webpCss())
        .pipe($.gp.shorthand())
        .pipe($.gp.groupCssMediaQueries())
        .pipe($.gp.autoprefixer())
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size)))
        .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev}))
        .pipe($.gp.rename($.app.rename))
        .pipe($.gp.csso())
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size)))
        .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev}))
        .pipe($.browserSync.stream())
}

export default scss;