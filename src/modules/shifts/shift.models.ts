import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from 'src/common/entity/base.entity';
import { Department } from 'src/common/enum/department.enum';
import { Employee_MESSAGES } from '../Employee/employee.constant';
import { IsEnum } from 'class-validator';
import { Date } from 'mongoose';

@Schema()
export class Shift extends BaseEntity {
  @Prop({ required: true, enum: Department })
  @IsEnum(Department, { message: Employee_MESSAGES.INVALID_DEPARTMENT })
  department: Department;

  @Prop({ required: true,type:Date })
  startTime: Date;

  @Prop({ required: true,type:Date })
  endTime: Date;

  @Prop({ required: true, type: [String] })
  skills: string[];
}

export type ShiftDocument = Shift & Document;
export const ShiftSchema = SchemaFactory.createForClass(Shift);