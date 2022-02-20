import gulp from 'gulp';
import browserSync from 'browser-sync';
import gp from 'gulp-load-plugins';

import app from './gulp/config/app';
import path from './gulp/config/path';

global.$ = {
    gulp: gulp,
    browserSync: browserSync,
    gp: gp(),
    app: app,
    path: path
}

import server from "./gulp/task/server";
import clear from "./gulp/task/clear";
import html from "./gulp/task/html";
import img from "./gulp/task/img";
import pug from "./gulp/task/pug";
import css from "./gulp/task/css";
import scss from "./gulp/task/scss";
import js from "./gulp/task/js";
import font from "./gulp/task/font";


const watcher = () => {
    $.gulp.watch($.path.html.watch, html);
    $.gulp.watch($.path.img.watch, img);
    $.gulp.watch($.path.pug.watch, pug);
    $.gulp.watch($.path.css.watch, css);
    $.gulp.watch($.path.scss.watch, scss);
    $.gulp.watch($.path.js.watch, js);
    $.gulp.watch($.path.font.watch, font);
};

const build = $.gulp.series(
    clear,
    $.gulp.parallel(img, pug, scss, js, font)
);

const dev = $.gulp.series(
    build,
    $.gulp.parallel(server, watcher)
);

export { clear };
export { html };
export { img };
export { pug };
export { css };
export { scss };
export { js };
export { font };



export default $.app.isProd ? build : dev;