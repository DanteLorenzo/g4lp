import webpack from "webpack-stream"
//JS
const js = () => {
    return $.gulp.src([
        $.path.js.jquery,
        $.path.js.src], { sourcemaps: $.app.isDev }) //Source directory
        .pipe($.gp.babel()) //Use next generation JavaScript
        //.pipe(webpack($.app.webpack)) //Run webpack as a stream
        .pipe($.gp.concat('main.js')) //Concatenate js files
        .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev })) //Destination directory 
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size))) //Shows file size
        .pipe($.gp.if($.app.isProd, $.gp.rename($.app.rename))) //Rename File
        .pipe($.gp.if($.app.isProd, $.gp.terser())) //Minify files 
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size))) //Shows file size
        .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev })) //Destination directory 
        .pipe($.browserSync.stream()) //Auto-relaod page
} 

export default js;