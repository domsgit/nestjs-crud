import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { CompanyService } from './company.service';
import { CompanyEntity } from './company.entity';
import { CompanyController } from './company.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity]), UserModule],
  providers: [CompanyService],
  controllers: [
    CompanyController
  ],
  exports: []
})
export class CompanyModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
