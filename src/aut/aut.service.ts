import { BadGatewayException, BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAutDto } from './dto/create-aut.dto';
import { UpdateAutDto } from './dto/update-aut.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt"
import * as speakeasy from 'speakeasy';
import { ArtistsService } from 'src/artists/artists.service';
@Injectable()
export class AutService {
  constructor(
    private userser: UserService,
    private artists: ArtistsService,
   private JwtService: JwtService,
  ) {}
  async login(email, password) {
    const user = await this.userser.findbyemail(email);
    if (!user) {
      throw new NotFoundException(
        `no user found this email:${email} please enter a valide email `,
      );
      }
      const verify = await bcrypt.compare(password, user.password || user.confirmpassword)
      if (!verify) {
        throw new UnauthorizedException("wronge password")
    }
    delete user.password || user.confirmpassword


    return {
      user,
      token: this.JwtService.sign({ id: user.id }),
    };
  }
 async enabletwofa(id) {
  const user= await this.userser.findOne(id)
  
   if (!user.enabletwofa) {
    return await this.userser.update(id, { enabletwofa: true });
    }
  return await this.userser.update(id, { enabletwofa: false });
  }
  
  async twofatoken(id) {
    const user = await this.userser.findOne(id);
       if (!user.enabletwofa) {
    throw new BadRequestException('u have not enable 2 fa')    
    }
    console.log(id);
    
    const toke = speakeasy.generateSecret().base32
    const check = await this.userser.update(id, { twofa: toke });
    return {secret:toke,check}
  }

  async verifytwofa(token, id) {
    const user = await this.userser.findOne(id);
    
    const ve= speakeasy.totp.verify({
      secret: user.twofa,
      token,
      encoding:'base32'
    })

return ve?"verified":ve
  }
}