import { PartialType } from '@nestjs/mapped-types';
import { CreateAutDto } from './create-aut.dto';

export class UpdateAutDto extends PartialType(CreateAutDto) {}
