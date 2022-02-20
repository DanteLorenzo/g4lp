const sass = require('gulp-sass')(require('sass'));

//SCSS
const scss = () => {
    return $.gulp.src($.path.scss.src, { sourcemaps: $.app.isDev}) //Source directory
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: 'SCSS',
                message: error.message
            }))
        })) //Pop-up windows on errors
        .pipe($.gp.sassGlob())
        .pipe(sass()) //Compiling SASS/SCSS 
        .pipe($.gp.concat('style.css')) //Concatenates files
        .pipe($.gp.cssimport()) //Finds imports, grabs the content of the linked file and replaces the import statement with it
        .pipe($.gp.webpCss()) //Replacing .jpg with .webp   
        .pipe($.gp.shorthand()) //Makes files lighter and more readable
        .pipe($.gp.groupCssMediaQueries()) //Group media queries
        .pipe($.gp.autoprefixer()) //Autoprefix for older browsers
        .pipe($.gp.if($.app.isDev, $.gp.beautify.css($.app.beautify))) //Make files more readable

        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size))) //Shows file size
        .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev})) //Destination directory 
        .pipe($.gp.rename($.app.rename)) //Rename File
        .pipe($.gp.csso()) //CSS minifier
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size))) //Shows file size
        .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev})) //Destination directory 
        .pipe($.browserSync.stream()) //Auto-relaod page
}

export default scss;