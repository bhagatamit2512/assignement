import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config"
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from 'src/modules/Employee/employee.module';
import { ShiftModule } from 'src/modules/shifts/shift.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    MongooseModule.forRoot('mongodb://0.0.0.0:27017/employe'),
    EmployeeModule,
    ShiftModule
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
