import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ShiftService } from './shift.service';
import { CreateShiftDto } from './dto/createShift.dto';

@Controller('shift')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) {}

  @Post()
  async create(@Body() data: CreateShiftDto) {
    return await this.shiftService.createShift(data);
  }

  @Get()
  async getShifts(@Query('start') start: string, @Query('end') end: string) {
    return this.shiftService.getShift(start,end);
  }
}
