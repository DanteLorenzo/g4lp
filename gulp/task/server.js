//live Server
const server = () => {
    $.browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
}

export default server;