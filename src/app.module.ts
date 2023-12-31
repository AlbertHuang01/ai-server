import {resolve} from 'path';
import {Module, MiddlewareConsumer, RequestMethod} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule, ConfigService} from 'nestjs-config';
import {MailerModule} from '@nest-modules/mailer';
import {StatusMonitorModule} from 'nest-status-monitor';
import statusMonitorConfig from './config/statusMonitor';
import {LoggerMiddleware} from './common/middleware/logger.middleware';
import {HelloModule} from './modules/hello/hello.module';
import {ExceptionModule} from './modules/exception/exception.module';
import {AiModule} from "./modules/ai/ai.module";

import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path';
import * as express from 'express';

@Module({
    imports: [
        ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
        TypeOrmModule.forRootAsync({
            useFactory: (config: ConfigService) => config.get('database'),
            inject: [ConfigService],
        }),
        // TODO @nestjs/terminus almost the same
        StatusMonitorModule.setUp(statusMonitorConfig),
        // MailerModule.forRootAsync({
        //     useFactory: (config: ConfigService) => config.get('email'),
        //     inject: [ConfigService],
        // }),
        HelloModule,
        ExceptionModule,
        AiModule,
    ],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer, app: NestExpressApplication) {
        // 配置静态文件目录
        // app.useStaticAssets(join(__dirname, '..', 'public'));

        // app.use('/static', express.static(join(__dirname, '..', 'public')))

        // 为 hello 路由添加中间件
        consumer
            .apply(LoggerMiddleware)
            .exclude({path: 'hello', method: RequestMethod.POST})
            .forRoutes('hello');
    }
}
