import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee, EmployeeDocument } from './employee.model';
import { Model } from 'mongoose';
import { EmployeeDTO } from './dto/createEmployee.dto';
import { UpdateEmployeeDto } from './dto/updateEmployee.dto';

@Injectable()
export class EmployeeRepo {
  constructor(
    @InjectModel(Employee.name)
    private readonly EmployeeModel: Model<EmployeeDocument>,
  ) {}

  async findEmployeeByEmail(email: string) {
    return await this.EmployeeModel.findOne({ email: email });
  }

  async createEmployee(employee: EmployeeDTO) {
    return await this.EmployeeModel.create(employee);
  }

  async findById(id: string) {
    return await this.EmployeeModel.findOne({ id: id });
  }

  async updateEmployeeInformation(
    id: string,
    updateEmployee: UpdateEmployeeDto,
  ) {
    return await this.EmployeeModel.findOneAndUpdate(
      { id: id },
      updateEmployee,
      { new: true },
    )
      .select(' -updatedAt -__v -createdAt -deletedAt -_id')
      .exec();
  }

}
