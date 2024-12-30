//Inventory Controller that interacts with the client request and repositories

import { Request,Response,NextFunction } from "express";
import { InventoryService } from "../services/InventoryServices";
import { asyncHandler } from "../utils/asyncHandler";
import { IInventoryService } from "../interfaces/IInventoryServices";

export class InventoryController {
  // Private service instance for handling business logic
  private service: IInventoryService;

  constructor(service: IInventoryService) {
    this.service = service;
  }
  // Create new inventory item
  createItem = asyncHandler(async (req: Request, res: Response) => {
    const item = await this.service.createItem(req.body);
    res.status(201).json({ success: true, data: item });
  });
  // Retrieve all inventory items
  getAllItems = asyncHandler(async (req: Request, res: Response) => {
    const items = await this.service.getAllItems();
    res.status(200).json({ success: true, data: items });
  });
  // Retrieve single item by ID
  getItemById = asyncHandler(async (req: Request, res: Response) => {
    const item = await this.service.getItemById(req.params.id);
    res.status(200).json({ success: true, data: item });
  });
  // Update existing item
  updateItem = asyncHandler(async (req: Request, res: Response) => {
    const item = await this.service.updateItem(req.params.id, req.body);
    res.status(200).json({ success: true, data: item });
  });
  // Delete item by ID
  deleteItem = asyncHandler(async (req: Request, res: Response) => {
    await this.service.deleteItem(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Item deleted Successfully" });
  });
}