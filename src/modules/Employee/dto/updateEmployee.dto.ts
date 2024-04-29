import { IsEmail, IsEnum, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { Roles } from 'src/common/enum/role.enum';
import { Employee_MESSAGES } from '../employee.constant';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmployeeDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(20)
  name?: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(20)
  department?: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(Roles, { message: Employee_MESSAGES.INVALID_ROLES })
  role?: Roles;

  @ApiProperty()
  @IsOptional()
  startTime?: string;

  @ApiProperty()
  @IsOptional()
  endTime?: string;

  @ApiProperty()
  @IsOptional()
  availability?: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ each: true })
  skills?: string[];

  @ApiProperty()
  @IsOptional()
  @IsString({ each: true })
  workingDays?: string[];
}
