import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from './entities/playlist.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Song } from 'src/song/entities/song.entity';

@Injectable()
export class PlaylistService {
  constructor(
    @InjectRepository(Playlist)
    private playlistrep: Repository<Playlist>,
    @InjectRepository(Song)
    private songrep: Repository<Song>,
    @InjectRepository(User)
    private userrep: Repository<User>,
  ) {}
 async create(createPlaylistDto: CreatePlaylistDto) {
    const Play = new Playlist()
    Play.name=createPlaylistDto.name


    const findsongs= await this.songrep.findByIds(createPlaylistDto.song)
   Play.songs = findsongs;



   const finduser = await this.userrep.findOneById(createPlaylistDto.userid)
   Play.user = finduser;
    return await this.playlistrep.save(Play);
  }

  async findAll() {
    return await this.playlistrep.find() ;
  }

  findOne(id: number) {
    return `This action returns a #${id} playlist`;
  }

  update(id: number, updatePlaylistDto: UpdatePlaylistDto) {
    return `This action updates a #${id} playlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} playlist`;
  }
}
