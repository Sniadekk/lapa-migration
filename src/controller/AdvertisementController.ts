import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Advertisement} from "../entity/Advertisement";
import {Shelter} from "../entity/Shelter";
import {baseToImage} from "../functions/baseToImage";

export class AdvertisementController {

    private advertisementRepository = getRepository(Advertisement);
    private shelterRepository = getRepository(Shelter);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.advertisementRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.advertisementRepository.findOneById(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        console.log(request);
        //const images = await request.body.images.map( (item) => baseToImage(item));
        return this.advertisementRepository.save(request.body);
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