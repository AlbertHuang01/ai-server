import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {CarouselEntity} from "./carousel.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {FictionEntity} from "./fiction.entity";
import {FictionDto} from "./fiction.dto";

@Injectable()
export class AiService {

    base_path = 'http://localhost:3000/static/'

    constructor(
        @InjectRepository(CarouselEntity)
        private readonly carouselRepository: Repository<CarouselEntity>,
        @InjectRepository(FictionEntity)
        private readonly fictionRepository: Repository<FictionEntity>
    ) {
    }

    async findAllCarousel(): Promise<CarouselEntity[]> {
        const carousels = await this.carouselRepository.find()
        return carousels.map(item => ({...item, img_url: this.base_path + item.img_url}))
    }

    async findAllFictions(): Promise<FictionDto[]> {
        const fictions = await this.fictionRepository.find({relations: ['author']})
        return fictions.map(item => {
            item.author.avatar = this.base_path + item.author.avatar;
            return {
                ...item,
                swipers: item.swipers.split(',').map(item => this.base_path + item),
                topics: item.topics.split(','),
                tags: item.tags.split(','),
            } as FictionDto
        })
    }

    async getFictionById(id: number): Promise<FictionDto> {
        const fiction = await this.fictionRepository.findOne({
            relations: ['author'],
            where: {id}
        })
        fiction.author.avatar = this.base_path + fiction.author.avatar;
        return {
            ...fiction,
            swipers: fiction.swipers.split(',').map(item => this.base_path + item),
            topics: fiction.topics.split(','),
            tags: fiction.tags.split(','),
        }
    }

}
