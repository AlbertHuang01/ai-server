import {
    Controller,
    Get,

    Query,

    Headers, Param,
} from '@nestjs/common';
import {
    ApiResponse,
    ApiTags,
    ApiQuery,
    ApiBearerAuth,
    ApiBody,
    ApiParam,
} from '@nestjs/swagger';
import {AiService} from "./ai.service";


@ApiBearerAuth()
@ApiTags('ai')
@Controller('/ai')
export class AiController {
    constructor(private readonly aiService: AiService) {
    }

    @Get('/carousels')
    carousels() {
        return this.aiService.findAllCarousel();
    }

    @Get('/fictions')
    fictions() {
        return this.aiService.findAllFictions();
    }

    // 查询
    @Get('/fictions/:id')
    fiction(@Param() {id}) {
        return this.aiService.getFictionById(Number(id))
    }

}
