import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsString,
  IsArray,
  ArrayNotEmpty,
  IsNotEmpty,
  IsDate
} from 'class-validator';
import { Department } from 'src/common/enum/department.enum';
import { Employee_MESSAGES } from 'src/modules/Employee/employee.constant';

export class CreateShiftDto {
  @ApiProperty({
    type: 'string',
    example: 'Technician',
  })
  @IsEnum(Department, { message: Employee_MESSAGES.INVALID_DEPARTMENT })
  department: Department;

  @ApiProperty({
    type: 'time',
    example: '6:00',
  })
  @IsDate()
  @IsNotEmpty()
  startTime: Date;

  @ApiProperty({
    type: 'time',
    example: '23:00',
  })
  @IsDate()
  @IsNotEmpty()
  endTime: Date;

  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsString()
  skills: string[];
}
