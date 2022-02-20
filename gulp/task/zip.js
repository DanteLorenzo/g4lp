//Zip
const zip = () => {
    return $.gulp.src($.path.zip) //Source directory
        .pipe($.gp.zip($.app.zip)) //Zip files
        .pipe($.gulp.dest($.path.root)) //Destination directory
};

export default zip;