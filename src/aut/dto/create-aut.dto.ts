import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateAutDto {}

export class logindto {
  @IsNotEmpty()
  @MinLength(4)
 readonly password: string;

  @IsEmail()
  @IsNotEmpty()
 readonly email: string;
}
