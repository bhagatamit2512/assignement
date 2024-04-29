import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsArray, IsEmail, IsEnum, IsString } from "class-validator";
import { Department } from "src/common/enum/department.enum";
import { Roles } from "src/common/enum/role.enum";
import { Employee_MESSAGES } from "../employee.constant";

export class EmployeeDTO {
    @ApiProperty({
        type: 'string',
        example: 'John',
      })
    @IsString()
    name: string;
    
    @ApiProperty({
        type: 'email',
        example: 'doe.john@gmail.com',
      })
    @IsEmail()
    email: string;
    
    @ApiProperty({
        type: 'enum',
        example: 'Technician',
      })
    @IsEnum(Department,{message:Employee_MESSAGES.INVALID_DEPARTMENT})
    department: Department;
    
    @ApiProperty({
        type: 'enum',
        example: 'Assitant',
      })
    @IsEnum(Roles, { message: Employee_MESSAGES.INVALID_ROLES })
    role: Roles;
    
    @ApiProperty({
        type: 'time',
        example: '6:00',
      })
    @IsString()
    startTime: 'string';
    
    @ApiProperty({
        type: 'time',
        example: '23:00',
      })
    @IsString()
    endTime:'string'
  
    @ApiProperty({
        type: 'bool',
        example: 'yes',
      })
    @IsString()
    availability: string;
    
    @ApiProperty()
    @IsArray()
    @ArrayMinSize(1)
    @IsString({ each: true })
    skills: string[];
    
    @ApiProperty()
    @IsArray()
    @ArrayMinSize(1)
    @IsString({ each: true })
    workingDays: string[];

}