import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
  minLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  password: string;

  @IsString()
  @IsNotEmpty()
  confirmpassword: string;

  apistring:string
}
