//live Server
const server = () => {
    $.browserSync.init({
        server: {
            baseDir: "./dist" //Directory where the site is located
        }
    }); //Init BrowserSync
}

export default server;