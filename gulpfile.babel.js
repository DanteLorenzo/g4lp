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



const watcher = () => {
    $.gulp.watch($.path.html.watch, html);
};

const build = $.gulp.series(
    clear,
    html
);

const dev = $.gulp.series(
    build,
    $.gulp.parallel(server, watcher)
);

export { clear };
export { html };

export default dev;