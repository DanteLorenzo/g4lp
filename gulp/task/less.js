//LESS
const less = () => {
    return $.gulp.src($.path.less.src, { sourcemaps: $.app.isDev}) //Source directory
        .pipe($.gp.less()) ////Compiling LESS
        .pipe($.gp.concat('style.css')) //Concatenates files
        .pipe($.gp.cssimport()) //Finds imports, grabs the content of the linked file and replaces the import statement with it
        .pipe($.gp.webpCss()) //Replacing .jpg with .webp   
        .pipe($.gp.shorthand()) //Makes files lighter and more readable
        .pipe($.gp.groupCssMediaQueries()) //Group media queries
        .pipe($.gp.autoprefixer()) //Autoprefix for older browsers
        .pipe($.gp.if($.app.isDev, $.gp.beautify.css($.app.beautify))) //Make files more readable
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size))) //Shows file size
        .pipe($.gulp.dest($.path.less.dest, { sourcemaps: $.app.isDev})) //Destination directory 
        .pipe($.gp.rename($.app.rename)) //Rename File
        .pipe($.gp.csso()) //CSS minifier
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size))) //Shows file size
        .pipe($.gulp.dest($.path.less.dest, { sourcemaps: $.app.isDev})) //Destination directory 
        .pipe($.browserSync.stream()) //Auto-relaod page
}

export default less;