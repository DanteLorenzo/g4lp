//HTML
const html = () => {
    return $.gulp.src($.path.html.src) //Source directory
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: 'HTML',
                message: error.message
            }))
        })) //Pop-up windows on errors
        .pipe($.gp.fileInclude()) //Include html files
        .pipe($.gp.webpHtmlNosvg()) //Replaces the <img> tag with <picture> <source> <img> in HTML files
        .pipe($.gp.if($.app.isDev, $.gp.htmlBeautify($.app.htmlBeautify))) //Make files more readable
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size))) //Shows file size
        .pipe($.gp.htmlmin($.app.htmlmin)) //HTML minifier
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size))) //Shows file size
        .pipe($.gulp.dest($.path.html.dest)) //Destination directory 
        .pipe($.browserSync.stream()) //Auto-relaod page
}

export default html;