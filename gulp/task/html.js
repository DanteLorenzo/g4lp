//HTML
const html = () => {
    return $.gulp.src($.path.html.src) //Source directory
        .pipe($.gp.fileInclude()) //Include html files
        .pipe($.gp.webpHtmlNosvg()) //Replaces the <img> tag with <picture> <source> <img> in HTML files
        .pipe($.gp.if($.app.isDev, $.gp.beautify.html($.app.beautify))) //Make files more readable
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size))) //Shows file size
        .pipe($.gp.htmlmin($.app.htmlmin)) //HTML minifier
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size))) //Shows file size
        .pipe($.gulp.dest($.path.html.dest)) //Destination directory 
        .pipe($.browserSync.stream()) //Auto-relaod page
}

export default html;