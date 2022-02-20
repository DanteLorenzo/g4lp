//Main paths
const destPath = "./dist"
const srcPath = "./src"

//Paths to Files
export default {
    root: destPath,
    zip: destPath + "/**/*.*",

    html: {
        src: srcPath + "/html/*.html",
        watch: srcPath + "/html/**/*.html",
        dest: destPath
    },

    pug: {
        src: srcPath + "/pug/*.pug",
        watch: srcPath + "/pug/**/*.pug",
        dest: destPath
    },

    css: {
        src: srcPath + "/css/*.css",
        watch: srcPath + "/css/**/*.css",
        dest: destPath + "/css"
    },

    scss: {
        src: srcPath + "/scss/*.{scss,sass}",
        watch: srcPath + "/scss/**/*.{scss,sass}",
        dest: destPath + "/css"
    },

    less: {
        src: srcPath + "/less/*.less",
        watch: srcPath + "/less/**/*.less",
        dest: destPath + "/css"
    },

    styl: {
        src: srcPath + "/styl/*.styl",
        watch: srcPath + "/styl/**/*.styl",
        dest: destPath + "/css"
    },

    js: {
        src: srcPath + "/js/*.js",
        watch: srcPath + "/js/**/*.js",
        dest: destPath + "/js"
    },

    ts: {
        src: srcPath + "/ts/*.ts",
        watch: srcPath + "/ts/**/*.ts",
        dest: destPath + "/js"
    },

    img: {
        src: srcPath + "/img/*.{png,jpg,jpeg,gif,svg}",
        watch: srcPath + "/img/**/*.{png,jpg,jpeg,gif,svg}",
        dest: destPath + "/img"
    },

    font: {
        src: srcPath + "/font/*.{ttf,woff,woff2,otf,svg,ttc,eot,otc}",
        watch: srcPath + "/font/**/*.{ttf,woff,woff2,otf,svg,ttc,eot,otc}",
        dest: destPath + "/font"
    },
}