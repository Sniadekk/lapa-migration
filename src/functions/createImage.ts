import {Advertisement} from "../entity/Advertisement";
import {Image} from "../entity/Image";
import {baseToImage} from "./baseToImage";
import {getRepository} from "typeorm";

export const createImage = (base64: string, advertisement: Advertisement) => {
    const imageRepository = getRepository(Image);
    const image = new Image();
    image.file = baseToImage(base64);
    console.log(advertisement);
    image.advertisement = advertisement;
    imageRepository.save(image);
};