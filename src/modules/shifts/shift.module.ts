import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Shift, ShiftSchema } from './shift.models';
import { ShiftController } from './shift.controller';
import { ShiftService } from './shift.service';
import { ShiftRepo } from './shift.repo';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Shift.name, schema: ShiftSchema }])
  ],
  controllers: [ShiftController],
  providers: [ShiftService,ShiftRepo],
  exports:[ShiftRepo]
})
export class ShiftModule {}
