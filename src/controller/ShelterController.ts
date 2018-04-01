import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Shelter} from "../entity/Shelter";
import {Advertisement} from "../entity/Advertisement";
import {createImage} from "../functions/createImage";

export class ShelterController {
    private shelterRepository = getRepository(Shelter);
    private advertisementRepository = getRepository(Advertisement);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.shelterRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.shelterRepository.findOneById(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.shelterRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        await this.shelterRepository.removeById(request.params.id);
    }

    async addAdvertisement(request: Request, response: Response, next: NextFunction) {
        const shelter = await this.shelterRepository.findOneById(request.params.id);
        const advertisement = await this.advertisementRepository.save(request.body);
        advertisement.images.map((image) => createImage(image, {...advertisement, images: null}));
        advertisement.shelter = shelter;
        return this.advertisementRepository.save(advertisement);
    }

    async getAdvertisements(request: Request, response: Response, next: NextFunction) {
        return this.shelterRepository.createQueryBuilder("shelter")
            .select("advertisements")
            .where("shelter.id = :id", {id: request.params.id})
            .leftJoin("shelter.advertisements", "advertisements")
            .getOne();
    }
}