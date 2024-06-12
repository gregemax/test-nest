import { Song } from "src/song/entities/song.entity";
import { Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("Artists")
export class Artist {
    @PrimaryGeneratedColumn()
    id: number
    
    @ManyToMany(() => Song, Song => Song.Artist)
    song:[]
}
