import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Advertisement} from "../entity/Advertisement";
import {Image} from "../entity/Image";
import {createImage} from "../functions/createImage";

export class AdvertisementController {

    private advertisementRepository = getRepository(Advertisement);

    async all(request: Request, response: Response, next: NextFunction) {
        const options: string[] = ["found", "seeking", "missing"];
        if (options.includes(request.query.status)) {
            return this.advertisementRepository
                .createQueryBuilder("advertisement")
                .where("advertisement.status = :status", {status: request.query.status})
                .getMany()
        }
        return this.advertisementRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.advertisementRepository.findOneById(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const advertisement = await this.advertisementRepository.save(request.body);
        advertisement.images.map((image) => createImage(image, {...advertisement, images: null}));
        return advertisement
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        await this.advertisementRepository.removeById(request.params.id);
    }

    async getAdvertisementsByStatus(request: Request, response: Response, next: NextFunction) {
        return this.advertisementRepository.createQueryBuilder("advertisement")
            .where("advertisement.status = :status", {status: request.params.status})
            .getMany()
    }

}