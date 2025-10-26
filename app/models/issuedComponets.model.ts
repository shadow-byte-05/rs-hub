import mongoose, { Schema } from "mongoose"

const issuedComponentsSchema = new Schema({
    borrower: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Components",
        required:true,
    },
    component: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Components",
    required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    issueDate: Date,
    returnDate: Date,
    }, { timestamps: true });

export const IssuedComponents = mongoose.models.IssuedComponents || mongoose.model("IssuedComponents",issuedComponentsSchema)
