import { Playlist } from "src/playlist/entities/playlist.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id: number
    

    @Column()
    name: string
    
    @Column({ unique: true })
    email: string
    
    @Column()
    password: string
    
    @Column()
    confirmpassword: string
    
    @OneToMany(() => Playlist, (Playlist) => Playlist.user)
    Playlist:Playlist
   
  

 }
