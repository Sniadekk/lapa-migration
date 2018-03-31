import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Advertisement} from "../entity/Advertisement";
import {Shelter} from "../entity/Shelter";

export class AdvertisementController {

    private userRepository = getRepository(Advertisement);
    private shelterRepository = getRepository(Shelter);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOneById(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        await this.userRepository.removeById(request.params.id);
    }

}