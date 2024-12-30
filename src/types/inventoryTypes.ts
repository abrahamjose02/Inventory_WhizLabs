
// Explicitly Defining the Types of Inventory Items

// The IInventoryItem interface defines the structure of the inventory item object. The interface contains the following properties:
export interface IInventoryItem{
    _id?:string;
    itemName:string;
    quantity:number;
    price:number;
    description:string;
    category:string;
    createdAt?:Date;
    updatedAt?:Date;
}