import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsEnum } from 'class-validator';
import { BaseEntity } from 'src/common/entity/base.entity';
import { Roles } from 'src/common/enum/role.enum';
import { Employee_MESSAGES } from './employee.constant';
import { Department } from 'src/common/enum/department.enum';

@Schema()
export class Employee extends BaseEntity {
  @Prop({ required: true, maxlength: 20 })
  name: string;

  @Prop({ lowercase: true, unique: true, required: true })
  @IsEmail()
  email: string;

  @Prop({ enum:Department,required:true })
  @IsEnum(Department,{message:Employee_MESSAGES.INVALID_DEPARTMENT})
  department: Department;

  @Prop({ enum: Roles ,required: true})
  @IsEnum(Roles, { message: Employee_MESSAGES.INVALID_ROLES })
  role: Roles;

  @Prop({ required: true })
  startTime: string;

  @Prop({ required: true })
  endTime: string;

  @Prop({ required: true })
  availability: string;

  @Prop({ required: true, type: [String] })
  skills: string[];

  @Prop({ required: true,type: [String] })
  workingDays: string[];
}

export type EmployeeDocument = Employee & Document;
export const EmployeeSchema = SchemaFactory.createForClass(Employee);
