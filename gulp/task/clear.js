import del from "del";

//Clear
const clear = () => {
    return del($.path.root) //Full clear folder "/dist"
};

export default clear;