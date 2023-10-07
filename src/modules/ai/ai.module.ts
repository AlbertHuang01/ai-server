import {Module} from '@nestjs/common';
import {AiController} from "./ai.controller";
import {AiService} from "./ai.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CarouselEntity} from "./carousel.entity";

@Module({
    imports: [TypeOrmModule.forFeature([CarouselEntity])],
    controllers: [AiController],
    providers: [AiService],
})
export class AiModule {
}
