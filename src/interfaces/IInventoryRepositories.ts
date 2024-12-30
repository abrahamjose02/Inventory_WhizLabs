import { IInventoryItem } from "../types/inventoryTypes";

// Interface for the Inventory Repository
export interface IInventoryRepository {
  create(item: IInventoryItem): Promise<IInventoryItem>;
  findAll(): Promise<IInventoryItem[]>;
  findById(id: string): Promise<IInventoryItem | null>;
  findByName(itemName: string): Promise<IInventoryItem | null>;
  update(
    id: string,
    item: Partial<IInventoryItem>
  ): Promise<IInventoryItem | null>;
  delete(id: string): Promise<IInventoryItem | null>;
}
