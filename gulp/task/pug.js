//PUG
const pug = () => {
    return $.gulp.src($.path.pug.src) //Source directory
        .pipe($.gp.pug($.app.pug)) //Compiling Pug templates
        .pipe($.gp.webpHtmlNosvg()) //Replaces the <img> tag with <picture> <source> <img> in HTML files
        .pipe($.gp.if($.app.isDev, $.gp.beautify.html($.app.beautify))) //Make files more readable
        .pipe($.gulp.dest($.path.pug.dest)) //Destination directory 
        .pipe($.browserSync.stream()) //Auto-relaod page
}

export default pug;