//Creating Repositories for Interacting with the model Schema

import { IInventoryItem } from "../types/inventoryTypes";
import { InventoryModel } from "../models/InventoryModel";

export class InventoryRepository{

    async create(item:IInventoryItem):Promise<IInventoryItem>{
        return await InventoryModel.create(item)
    }

    async findAll():Promise<IInventoryItem[]>{
        return await InventoryModel.find().sort({createdAt:-1})
    }

    async findById(id:String):Promise<IInventoryItem | null>{
        return await InventoryModel.findById(id)
    }

    async update(id:string,item: Partial<IInventoryItem>):Promise<IInventoryItem | null>{
        return await InventoryModel.findByIdAndUpdate(id,item,{new:true})
    }

    async delete(id:string):Promise<IInventoryItem | null>{
        return await InventoryModel.findByIdAndDelete(id)
    }
}