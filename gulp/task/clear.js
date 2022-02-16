import del from "del";

//Clear
const clear = () => {
    return del($.path.root)
};

export default clear;