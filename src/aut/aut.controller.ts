import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UnauthorizedException,
  UseGuards,
  Request
} from '@nestjs/common';
import { AutService } from './aut.service';
import { CreateAutDto, logindto } from './dto/create-aut.dto';
import { UpdateAutDto } from './dto/update-aut.dto';
import { AuthGuard } from '@nestjs/passport';
import { Guard } from './gurd';
import {v4 as uuidv4} from "uuid"

@Controller('aut')
export class AutController {
  constructor(private readonly autService: AutService) {}
  @Post('login')
  async AuthGuard(
    @Body() greg: logindto,
    @Request()
    req,
  ) {
    const { email, password } = greg;
    return this.autService.login(email, password);
  }

  @Get('enabletwofa')
  @UseGuards(Guard)
  enabletwofa(
    @Request()
    req,
    ) {
    console.log(req.user);
    return this.autService.enabletwofa(req.user.Id);
  }
  @Get('twofa')
  @UseGuards(Guard)
  twofa(
    @Request()
    req,
  ) {
    
    return this.autService.twofatoken(req.user.Id);
  }
  @Post('virifytwofa')
  @UseGuards(Guard)
   verify (
    @Request()
     req,
     @Body()
    body
  ) {
    console.log(uuidv4());
    
const {token}=body    
    return this.autService.verifytwofa(token,req.user.Id);
  }
}
