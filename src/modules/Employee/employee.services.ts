import { BadRequestException, Injectable } from '@nestjs/common';
import { EmployeeRepo } from './employee.repo';
import { EmployeeDTO } from './dto/createEmployee.dto';
import { Employee_MESSAGES } from './employee.constant';
import { UpdateEmployeeDto } from './dto/updateEmployee.dto';

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepo: EmployeeRepo) {}

  async createEmployee(data: EmployeeDTO) {
    try {
      const isAlreadyExist = await this.employeeRepo.findEmployeeByEmail(data.email);

      if (isAlreadyExist) {
        throw new BadRequestException(Employee_MESSAGES.ALREADY_EXISTS);
      }
     await this.employeeRepo.createEmployee(data)
     return Employee_MESSAGES.CREATED
    } catch (error) {
      console.log(error)
        throw new BadRequestException(Employee_MESSAGES.FAILURE)
    }
  }

  async updateEmployeeDetails(id:string,data:UpdateEmployeeDto){
    try {
      const userExist=await this.employeeRepo.findById(id)
      if (!userExist){
        throw new BadRequestException(Employee_MESSAGES.NOT_EXISTS)
      }
      await this.employeeRepo.updateEmployeeInformation(id,data)
      return Employee_MESSAGES.EMPLOYEE_UPDATED
    } catch (error) {
      throw new BadRequestException(Employee_MESSAGES.EMPLOYEE_UPDATE_FAILED)
      
    }
  }
}
