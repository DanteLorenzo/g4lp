import webpack from "webpack-stream"
//JS
const js = () => {
    return $.gulp.src($.path.js.src, { sourcemaps: $.app.isDev }) //Source directory
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: 'JS',
                message: error.message
            }))
        })) //Pop-up windows on errors
        .pipe($.gp.babel()) //Use next generation JavaScript
        .pipe(webpack($.app.webpack)) //Run webpack as a stream
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size))) //Shows file size
        .pipe($.gp.if($.app.isProd, $.gp.uglify())) //Minify files 
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size))) //Shows file size
        .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev })) //Destination directory 
        .pipe($.browserSync.stream()) //Auto-relaod page
} 

export default js;