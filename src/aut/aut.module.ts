import { Module } from '@nestjs/common';
import { AutService } from './aut.service';
import { AutController } from './aut.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { secret } from 'src/things';
import { JwtStrategy } from './statage';
import { ArtistsModule } from 'src/artists/artists.module';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: secret,
      signOptions: {
        expiresIn: '4d',
        },
        }),
      ArtistsModule,
  ],
  controllers: [AutController],
  providers: [AutService,JwtStrategy],
})
export class AutModule {}
