
// Explicitly Defining the Types of Inventory Items

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