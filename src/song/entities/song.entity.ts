import { Artist } from 'src/artists/entities/artist.entity';
import { Playlist } from 'src/playlist/entities/playlist.entity';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Song')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  artist: string;

  @Column('date')
  releaseDate: string;

  @Column('time')
  duration: string;

  @Column('simple-array')
  lyrics: string[];

  @ManyToOne(() => Playlist, (Playlist) => Playlist.songs)
  playlist: Playlist;

  @ManyToMany(() => Artist, (Artist) => Artist.song)
  Artist:[]
}
