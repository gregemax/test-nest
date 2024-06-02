import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePlaylistDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsArray()
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  song;
  
  @IsNumber()
  @IsNotEmpty()
  userid: number;
}
