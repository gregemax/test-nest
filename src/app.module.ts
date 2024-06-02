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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'gregemax700@gmail.com',

      database: 'emax',
      entities: [Song, Playlist, User],
      synchronize: true,
    }),
    SongModule,
    PlaylistModule,
    UserModule,
    ArtistsModule,
  ],
})
export class AppModule implements NestModule {
  constructor(private datasorce: DataSource) {
    console.log(datasorce.driver.database);
  }

  configure(consumer: MiddlewareConsumer) {}
}
