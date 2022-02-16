//HTML
const html = () => {
    return $.gulp.src($.path.html.src)
        .pipe($.gulp.dest($.path.html.dest))
        .pipe($.browserSync.stream())
}

export default html;