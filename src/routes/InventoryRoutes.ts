    import express from 'express'
import { InventoryController } from '../controllers/InventoryController'
import { InventoryRepository } from '../repositories/InventoryRepositories'
import { InventoryService } from '../services/InventoryServices'
// Create a new router instance
const router = express.Router()

// Create instances of the repository, service, and controller
const repository = new InventoryRepository();
const service = new InventoryService(repository);
const controller = new InventoryController(service);

// Define routes for inventory items
router.post("/", controller.createItem);
router.get("/", controller.getAllItems);
router.get("/:id", controller.getItemById);
router.put("/:id", controller.updateItem);
router.delete("/:id", controller.deleteItem);

export default router;