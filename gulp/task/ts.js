//TS
const ts = () => {
    return $.gulp.src($.path.ts.src, { sourcemaps: $.app.isDev }) //Source directory
        .pipe($.gp.typescript($.app.typescript)) //Compile TS
        .pipe($.gp.babel()) //Use next generation JavaScript
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size))) //Shows file size
        .pipe($.gp.if($.app.isProd, $.gp.terser())) //Minify files 
        .pipe($.gp.if($.app.isProd, $.gp.size($.app.size))) //Shows file size
        .pipe($.gulp.dest($.path.ts.dest, { sourcemaps: $.app.isDev })) //Destination directory 
        .pipe($.browserSync.stream()) //Auto-relaod page
} 

export default ts;