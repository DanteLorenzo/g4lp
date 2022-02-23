//Font
const font = () => {
    return $.gulp.src($.path.font.src) //Source directory
        .pipe($.gp.newer($.path.font.dest)) //Passing through only those source files that are newer than corresponding destination files
        .pipe($.gp.fonter($.app.fonter)) //Font subsetting and converting
        .pipe($.gulp.dest($.path.font.dest)) //Destination directory 
        .pipe($.gp.ttf2woff2()) //Convert TTF files to WOFF2 ones
        .pipe($.gulp.dest($.path.font.dest)) //Destination directory 
        .pipe($.browserSync.stream()) //Auto-relaod page
}

export default font;