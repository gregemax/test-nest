import { Module } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistController } from './playlist.controller';
import { Playlist } from './entities/playlist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from 'src/song/entities/song.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Playlist,Song,User])],
  controllers: [PlaylistController],
  providers: [PlaylistService],
})
export class PlaylistModule {}
