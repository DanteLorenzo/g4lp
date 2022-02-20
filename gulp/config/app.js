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

    //CSS
    rename: {
        suffix: ".min"
    },

    //JS
    webpack: {
        mode: isProd ? "production" : "development"
    },

    //TS
    typescript: {
        noImplicitAny: true
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

    beautify: {
        indent_size: 4
    },

    //ZIP
    zip: 'website.zip'
}