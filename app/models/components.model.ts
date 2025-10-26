import mongoose, { Schema } from "mongoose"

export interface Components{
  name?:String,
  category:String,
  quantity:Number,
  available:Number,
  image?:string,
  description?:string,
  lastUpdated:Date
}

const componentSchema = new Schema<Components>({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Sensor',
      'microController & Boards',
      'Motor',
      'actuators & motorControls',
      'Batteries',
      'Communication Modules',
      'Miscellaneous',
    ],
  },
  quantity:{
    type:Number,
    required:true,
    min:1,
  },
  available:{
    type:Number,
    required:true,
    default: function () {
      return this.quantity
    }
  },
  image: String,
  description: String,
  lastUpdated: {
    type: Date,
    default:Date.now,
  }
},{
  timestamps:true
})

export const ComponentsModel = mongoose.models.Components || mongoose.model("Components",componentSchema)  