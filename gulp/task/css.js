//CSS
const css = () => {
    return $.gulp.src($.path.css.src, { sourcemaps: $.app.isDev}) //Source directory
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: 'CSS',
                message: error.message
            }))
        })) //Pop-up windows on errors
        .pipe($.gp.concat('style.css')) //Concatenates files
        .pipe($.gp.cssimport()) //Finds imports, grabs the content of the linked file and replaces the import statement with it
        .pipe($.gp.webpCss()) //Replacing .jpg with .webp        
        .pipe($.gp.shorthand()) //Makes files lighter and more readable
        .pipe($.gp.groupCssMediaQueries()) //Group media queries
        .pipe($.gp.autoprefixer()) //Autoprefix for older browsers
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size))) //Shows file size
        .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev})) //Destination directory 
        .pipe($.gp.rename($.app.rename)) //Rename File
        .pipe($.gp.csso()) //CSS minifier
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size))) //Shows file size
        .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev})) //Destination directory 
        .pipe($.browserSync.stream()) //Auto-relaod page
}

export default css;