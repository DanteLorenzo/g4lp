const destPath = "./dist"
const srcPath = "./src"

export default {
    root: destPath,

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
        src: srcPath + "/scss/*.{scss, sass}",
        watch: srcPath + "/scss/**/*.{scss, sass}",
        dest: destPath + "/css"
    },

    js: {
        src: srcPath + "/js/*.js",
        watch: srcPath + "/js/**/*.js",
        dest: destPath + "/js"
    },

    img: {
        src: srcPath + "/img/*.{jpeg, png, jpg, svg, gif}",
        watch: srcPath + "/img/**/*.{jpeg, png, jpg, svg, gif}",
        dest: destPath + "/img"
    },

    font: {
        src: srcPath + "/font/*.{ttf, woff, woff2, otf, svg, ttc, eot}",
        watch: srcPath + "/font/**/*.{ttf, woff, woff2, otf, svg, ttc, eot}",
        dest: destPath + "/font"
    },
}