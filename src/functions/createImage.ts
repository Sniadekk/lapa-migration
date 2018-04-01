import {Advertisement} from "../entity/Advertisement";
import {Image} from "../entity/Image";
import {baseToImage} from "./baseToImage";
import {getRepository} from "typeorm";

export const createImage = (base64: string, advertisement: Advertisement) => {
    const imageRepository = getRepository(Image);
    const image = new Image();
    //slice to get rid of public/
    image.file = baseToImage(base64).slice(7);
    image.advertisement = advertisement;
    imageRepository.save(image);
};