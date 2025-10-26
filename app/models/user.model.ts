import mongoose, { Schema } from "mongoose"
import { unique } from "next/dist/build/utils"

export interface User{
    username?:String,
    email?:String,
    password:String,
    role:String,
    regdNo:String,
    branch:String,
    year:String,
    issuedComponents:mongoose.Types.ObjectId[],
    createdAt:Date,
    updatedAt:Date,

}

const userSchema = new Schema<User>({
    username:{
        type:String,
        unique:true,
        trim:true,
        minlenght:4,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:["member","admin"],
        default:"member"
    },
    regdNo:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true,
    },
    year: {
        type:String,
        enum:["1st","2nd","3rd","4th"],
        default:"1st",
    },
    issuedComponents:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"issuedComponents"
    }]

},{
    timestamps:true,
})

export const UserModel = mongoose.models.User || mongoose.model<User>('User',userSchema)