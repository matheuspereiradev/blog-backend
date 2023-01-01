import { Module } from '@nestjs/common';
import BCryptHashProvider from './bcrypt/bcript.provider';

@Module({
  providers: [
    BCryptHashProvider
  ],
})
export class HashModule {}