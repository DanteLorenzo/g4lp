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

    htmlBeautify: {
        "indent_size": 4,
        "indent_char": " ",
        "eol": "\n",
        "indent_level": 0,
        "indent_with_tabs": false,
        "preserve_newlines": true,
        "max_preserve_newlines": 10,
        "jslint_happy": false,
        "space_after_anon_function": false,
        "brace_style": "collapse",
        "keep_array_indentation": false,
        "keep_function_indentation": false,
        "space_before_conditional": true,
        "break_chained_methods": false,
        "eval_code": false,
        "unescape_strings": false,
        "wrap_line_length": 0,
        "wrap_attributes": "auto",
        "wrap_attributes_indent_size": 4,
        "end_with_newline": false
    },
    
    //General
    size: {
        showFiles: isProd
    }
}