import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SongModule } from './song/song.module';
import { Song } from './song/entities/song.entity';
import { PlaylistModule } from './playlist/playlist.module';
import { Playlist } from './playlist/entities/playlist.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { DataSource } from 'typeorm';
import { ArtistsModule } from './artists/artists.module';
import { AutModule } from './aut/aut.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { secret } from './things';
import { Artist } from './artists/entities/artist.entity';
import { datasourceOption } from 'db/data-source';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
      
    }),
    TypeOrmModule.forRoot(datasourceOption),

    SongModule,
    PlaylistModule,
    UserModule,
    ArtistsModule,
    AutModule, 
  ],
})
export class AppModule implements NestModule {
  constructor(private datasorce: DataSource) {
    console.log(datasorce.driver.database);
  }

  configure(consumer: MiddlewareConsumer) {}
}
