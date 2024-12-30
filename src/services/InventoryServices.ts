import { IInventoryItem } from "../types/inventoryTypes";
import { InventoryRepository } from "../repositories/InventoryRepositories";
import { NotFoundError,ValidationError } from "../utils/error";
import { IInventoryService } from "../interfaces/IInventoryServices";
import { IInventoryRepository } from "../interfaces/IInventoryRepositories";

export class InventoryService implements IInventoryService {
  // Private repository instance for data access
  private repository: IInventoryRepository;

  constructor(repository: IInventoryRepository) {
    this.repository = repository;
  }

  /**
   * Validates inventory item data
   * Checks for required fields and valid values
   */

  private validateItem(item: IInventoryItem): void {
    if (!item.itemName || item.itemName.trim().length === 0) {
      throw new ValidationError("Item name is required");
    }
    if (item.quantity < 0) {
      throw new ValidationError("Quantity cannot be negative");
    }

    if (item.price < 0) {
      throw new ValidationError("Price cannot be negative");
    }

    if (!item.category) {
      throw new ValidationError("Category is required");
    }
  }
  /**
   * Creates new inventory item
   * Validates item data and checks for duplicate names
   */

  async createItem(item: IInventoryItem): Promise<IInventoryItem> {
    this.validateItem(item);
    // Check for existing item with same name (case-insensitive)
    const existingItem = await this.repository.findByName(item.itemName);
    if (existingItem) {
      throw new ValidationError(
        `The item name "${item.itemName}" already exists. Please choose a different name.`
      );
    }

    return await this.repository.create(item);
  }
// Retrieve all inventory items
  async getAllItems(): Promise<IInventoryItem[]> {
    return await this.repository.findAll();
  }

// Retrieve single item by ID

  async getItemById(id: string): Promise<IInventoryItem> {
    const item = await this.repository.findById(id);
    if (!item) {
      throw new NotFoundError("Item not found");
    }
    return item;
  }
  // Update existing item

  async updateItem(
    id: string,
    item: Partial<IInventoryItem>
  ): Promise<IInventoryItem> {
    if (item.itemName) {
        // Check for existing item with same name (case-insensitive)
      const existingItem = await this.repository.findByName(item.itemName);
      if (existingItem && existingItem._id !== id) {
        throw new ValidationError(
          `The item name "${item.itemName}" already exists. Please choose a different name.`
        );
      }
    }

    const updatedItem = await this.repository.update(id, item);
    if (!updatedItem) {
      throw new NotFoundError("Item not found");
    }
    return updatedItem;
  }
    // Delete item by ID
  async deleteItem(id: string): Promise<void> {
    const deletedItem = await this.repository.delete(id);
    if (!deletedItem) {
      throw new NotFoundError("Item not found");
    }
  }
}