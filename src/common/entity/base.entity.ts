import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import {Document} from 'mongoose'
import {v4 as uuidv4} from 'uuid'

@Schema()
export class BaseEntity extends Document{
    @Prop({type:String,default:()=>uuidv4()})
    id:string;

    @Prop({type:Date,default: Date.now})
    createdAt:Date;

    @Prop({ type: Date, default: Date.now })
    updatedAt: Date;

    @Prop({ type: Date, default: null })
    deletedAt: Date;
}

export const BaseEntitySchema=SchemaFactory.createForClass(BaseEntity)