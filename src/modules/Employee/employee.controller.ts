import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.services';
import { EmployeeDTO } from './dto/createEmployee.dto';
import { UpdateEmployeeDto } from './dto/updateEmployee.dto';

@Controller('Employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(@Body() data: EmployeeDTO){
    return await this.employeeService.createEmployee(data);
  }

  @Put(':id')
  async update(@Param('id') id :string ,@Body() data:UpdateEmployeeDto){
    return this.employeeService.updateEmployeeDetails(id,data)
  }
}
