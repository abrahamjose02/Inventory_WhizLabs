import { IInventoryItem } from "../types/inventoryTypes";
import { InventoryRepository } from "../repositories/InventoryRepositories";
import { NotFoundError,ValidationError } from "../utils/error";
import { IInventoryService } from "../interfaces/IInventoryServices";
import { IInventoryRepository } from "../interfaces/IInventoryRepositories";

export class InventoryService implements IInventoryService{
    private repository:IInventoryRepository;

    constructor(repository:IInventoryRepository){
        this.repository = repository
    }

    private validateItem(item:IInventoryItem):void{
        if(!item.itemName || item.itemName.trim().length === 0){
            throw new ValidationError('Item name is required');
        }
        if(item.quantity < 0){
            throw new ValidationError('Quantity cannot be negative');
        }

        if(item.price < 0){
            throw new ValidationError('Price cannot be negative');
        }

        if(!item.category){
            throw new ValidationError('Category is required');
        }
    }

    async createItem(item:IInventoryItem):Promise<IInventoryItem>{
        this.validateItem(item);
        return await this.repository.create(item);
    }

    async getAllItems():Promise<IInventoryItem[]>{
        return await this.repository.findAll();
    }

    async getItemById(id:string):Promise<IInventoryItem>{
        const item = await this.repository.findById(id)
        if(!item){
            throw new NotFoundError('Item not found')
        }
        return item
    }

    async updateItem(id:string,item:Partial<IInventoryItem>):Promise<IInventoryItem>{
        const updatedItem = await this.repository.update(id,item)
        if(!updatedItem){
            throw new NotFoundError('Item not found')
        }
        return updatedItem
    }

    async deleteItem(id:string):Promise<void>{
        const deletedItem = await this.repository.delete(id)
        if(!deletedItem){
            throw new NotFoundError('Item not found');
        }
    }
}