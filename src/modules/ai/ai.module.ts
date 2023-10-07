import {Module} from '@nestjs/common';
import {AiController} from "./ai.controller";
import {AiService} from "./ai.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CarouselEntity} from "./carousel.entity";
import {AuthorEntity} from "./author.entity";
import {FictionEntity} from "./fiction.entity";

@Module({
    imports: [TypeOrmModule.forFeature([CarouselEntity, AuthorEntity, FictionEntity])],
    controllers: [AiController],
    providers: [AiService],
})
export class AiModule {
}
