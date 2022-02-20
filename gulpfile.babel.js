//Main Import
import gulp from 'gulp';
import browserSync from 'browser-sync';
import gp from 'gulp-load-plugins';
import app from './gulp/config/app';
import path from './gulp/config/path';

//Global 
global.$ = {
    gulp: gulp,
    browserSync: browserSync,
    gp: gp(),
    app: app,
    path: path
}

//Task Import
import server from "./gulp/task/server";
import clear from "./gulp/task/clear";
import pug from "./gulp/task/pug";
import scss from "./gulp/task/scss";
import js from "./gulp/task/js";
import img from "./gulp/task/img";
import font from "./gulp/task/font";
import less from "./gulp/task/less";
// import css from "./gulp/task/css";
// import html from "./gulp/task/html";

//Tracks changes in the project
const watcher = () => {
    $.gulp.watch($.path.pug.watch, pug);
    $.gulp.watch($.path.scss.watch, scss);
    $.gulp.watch($.path.js.watch, js);
    $.gulp.watch($.path.font.watch, font);
    $.gulp.watch($.path.img.watch, img);
    $.gulp.watch($.path.less.watch, less);
    // $.gulp.watch($.path.html.watch, html);
    // $.gulp.watch($.path.css.watch, css);
};

//Production(without server and watcher) == "gulp --production"
const build = $.gulp.series(
    clear,
    $.gulp.parallel( pug, less, js, font, img)
);

//For Development == "gulp"
const dev = $.gulp.series(
    build,
    $.gulp.parallel(server, watcher)
);

//Single exports 
export { clear };
export { pug };
export { scss };
export { js };
export { font };
export { img };
// export { html };
// export { css };


//Default start "gulp". For production build need "gulp --production"
export default $.app.isProd ? build : dev;