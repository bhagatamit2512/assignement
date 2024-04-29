import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './employee.model';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.services';
import { EmployeeRepo } from './employee.repo';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }])
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService,EmployeeRepo],
  exports:[EmployeeRepo]
})
export class EmployeeModule {}
