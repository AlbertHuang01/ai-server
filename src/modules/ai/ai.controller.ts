import {
    Controller,
    Get,

    Query,

    Headers,
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

}
