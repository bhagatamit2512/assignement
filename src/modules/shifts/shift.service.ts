import { BadRequestException, Injectable } from "@nestjs/common";
import { ShiftRepo } from "./shift.repo";
import { CreateShiftDto } from "./dto/createShift.dto";
import { Shift_MESSAGES } from "./shift.constants";

@Injectable()
export class ShiftService{
    constructor(private readonly shiftRepo:ShiftRepo ){}

    async createShift(data:CreateShiftDto){
        try {
            const isDepartmentExists=await this.shiftRepo.findBydepartment(data.department)
            if(isDepartmentExists){
                throw new BadRequestException(Shift_MESSAGES.ALREADY_EXISTS)
            }
            await this.shiftRepo.createShift(data)
            return Shift_MESSAGES.CREATED
        } catch (error) {
            console.log(error)
            throw new BadRequestException(Shift_MESSAGES.FAILURE)
            
        }
    }

    async getShift(start:string,end:string){
        try {
            const result=await this.shiftRepo.findByShiftTime(start,end)
            return result
        } catch (error) {
            throw new BadRequestException(Shift_MESSAGES.INVALID_SHIFT)
        }
    }
}