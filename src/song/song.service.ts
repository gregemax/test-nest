import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './entities/song.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private songrep: Repository<Song>,
  ) {}
  async create(createSongDto: CreateSongDto) {
    return await this.songrep.save(createSongDto);
  }

  async findAll() {
    return await this.songrep.find()
  }

  findOne(id: number) {
  return  this.songrep.findOneBy({id})
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return ;
  }

  remove(id: number) {
    return this.songrep.delete({id})
  }
}
