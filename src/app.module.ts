import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MoviesModule } from './movies/movies.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, MoviesModule, UserModule],

})
export class AppModule {}
