import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { v4 as uu } from 'uuid';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userrep: Repository<User>,
  ) {}
  async signUp(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 12);
    createUserDto.confirmpassword = null;
    createUserDto.apistring = uu();

    return await this.userrep.save(createUserDto);
  }
  q;
  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    return await this.userrep.findOneBy({ id });
  }
  async findbyemail(email: string) {
    return await this.userrep.findOneBy({ email });
  }

  update(id: number, updateUserDto: any) {
    return this.userrep.update({ id }, updateUserDto);
  }

  remove(id: number) {
    return this.userrep.delete(id);
  }
}
