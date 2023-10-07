import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {CarouselEntity} from "./carousel.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class AiService {

    constructor(
        @InjectRepository(CarouselEntity)
        private readonly carouselRepository: Repository<CarouselEntity>
    ) {
    }

    async findAllCarousel(): Promise<CarouselEntity[]> {
        const carousels = await this.carouselRepository.find()
        return carousels.map(item => ({...item, img_url: 'http://localhost:3000/static/' + item.img_url}))
    }

}
