//Status Development or Production
const isProd = process.argv.includes('--production');
const isDev = !isProd;

//Options for plugins
export default {
    //Status
    isProd: isProd,
    isDev: isDev,

    //IMG
    imagemin: {
        verbose: true
    },

    //JS
    webpack: {
        mode: isProd ? "production" : "development"
    },

    //Font
    fonter: {
        formats: ["ttf", "eot", "woff", "otf"]
    },

    // PUG/HTML
    pug: {
        pretty: isDev
    },
    
    htmlmin: {
        collapseWhitespace: isProd 
    },
    
    //General
    size: {
        showFiles: isProd
    },

    rename: {
        suffix: ".min"
    },

    beautify: {
        indent_size: 4
    },

    //ZIP
    zip: 'website.zip'
}