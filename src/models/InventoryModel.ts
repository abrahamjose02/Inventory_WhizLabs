// Inventory Model Schema Defining
import mongoose,{Schema} from "mongoose";
import { IInventoryItem } from "../types/inventoryTypes";

//Defining the Schema for the Inventory
const inventorySchema = new Schema<IInventoryItem>({
    itemName:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
//Exporting the Inventory Model

export const InventoryModel = mongoose.model<IInventoryItem>('Inventory',inventorySchema);