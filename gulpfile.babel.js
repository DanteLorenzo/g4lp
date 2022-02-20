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



const watcher = () => {
    $.gulp.watch($.path.html.watch, html);
    $.gulp.watch($.path.img.watch, img);

};

const build = $.gulp.series(
    clear,
    $.gulp.parallel(html, img)
);

const dev = $.gulp.series(
    build,
    $.gulp.parallel(server, watcher)
);

export { clear };
export { html };
export { img };


export default $.app.isProd ? build : dev;