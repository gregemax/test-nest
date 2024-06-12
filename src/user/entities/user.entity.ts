import { Playlist } from 'src/playlist/entities/playlist.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uu } from 'uuid';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true, type: 'text' })
  confirmpassword: string;

  @Column({ nullable: true, type: 'text' })
  twofa: string;
  @Column({ default: false, type: 'boolean' })
  enabletwofa: boolean;
  @Column()
  apistring: string;
  @Column()
  me: string;

  @OneToMany(() => Playlist, (Playlist) => Playlist.user)
  Playlist: Playlist;
}
