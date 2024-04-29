import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Shift, ShiftDocument } from "./shift.models";
import { Model } from "mongoose";
import { CreateShiftDto } from "./dto/createShift.dto";

@Injectable()
export class ShiftRepo{
    constructor(
        @InjectModel(Shift.name) private readonly ShiftModel:Model<ShiftDocument>
    ){}

    async findBydepartment(department:string){
        return await this.ShiftModel.findOne({department:department})
    }

   async createShift(data:CreateShiftDto){
    return await this.ShiftModel.create(data)
   }

   async findByShiftTime(start:string,end:string){
    const strtTime=parseInt(start)
    const endTime=parseInt(end)
    return await this.ShiftModel.find({
        $or:[
            {startTime:{$gte:strtTime,$lt:endTime}},
            {endTime:{$gt:strtTime,$lte:endTime}}
        ]
    })
   }
}