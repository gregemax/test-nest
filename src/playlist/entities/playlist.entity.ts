import { Song } from "src/song/entities/song.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Playlist')
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Song, (song) => song.playlist)
  songs: Song[];

  @ManyToOne(() => User, (user) => user.Playlist)
  user: User
}
