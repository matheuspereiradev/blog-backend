import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DomainModule } from './application/domain.module';

@Module({
  imports: [DomainModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
