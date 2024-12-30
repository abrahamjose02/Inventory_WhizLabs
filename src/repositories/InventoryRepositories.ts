//Creating Repositories for Interacting with the model Schema

import { IInventoryItem } from "../types/inventoryTypes";
import { InventoryModel } from "../models/InventoryModel";
import { IInventoryRepository } from "../interfaces/IInventoryRepositories";

export class InventoryRepository implements IInventoryRepository{
    //create new inventory item
    async create(item:IInventoryItem):Promise<IInventoryItem>{
        return await InventoryModel.create(item)
    }
    //retrieve all inventory items
    async findAll():Promise<IInventoryItem[]>{
        return await InventoryModel.find().sort({createdAt:-1})
    }
    //retrieve single item by ID
    async findById(id:String):Promise<IInventoryItem | null>{
        return await InventoryModel.findById(id)
    }
    //retrieve single item by name
    async findByName(itemName:String):Promise<IInventoryItem | null>{
        const regex = new RegExp(`^${itemName}$`,'i') //case-insensitive regex match
        return await InventoryModel.findOne({itemName:{$regex:regex}})
    }   
    //update inventory item
    async update(id:string,item: Partial<IInventoryItem>):Promise<IInventoryItem | null>{
        return await InventoryModel.findByIdAndUpdate(id,item,{new:true})
    }
    //delete inventory item
    async delete(id:string):Promise<IInventoryItem | null>{
        return await InventoryModel.findByIdAndDelete(id)
    }
}