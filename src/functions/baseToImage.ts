export const baseToImage = (base64file: string) => {
    const base64Img = require('base64-img');
    const shortid = require('shortid');
    return base64Img.imgSync(base64file, 'public/images', shortid.generate(), (err, filepath) =>filepath);
};