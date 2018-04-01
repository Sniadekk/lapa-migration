export const baseToImage = (base64file: string) => {
    const fs = require('fs');
    const shortid = require('shortid');
    const extension = base64file.substring("data:image/".length, base64file.indexOf(";base64"));
    fs.writeFile(shortid.generate() + "." + extension, new Buffer(base64file, "base64"), (err) => console.log(err));
};