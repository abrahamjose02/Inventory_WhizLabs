import express from 'express'
import { InventoryController } from '../controllers/InventoryController'
import { validateRequest } from '../middleware/validateRequest'
import { inventorySchema } from '../validators/inventoryValidators'
import { InventoryRepository } from '../repositories/InventoryRepositories'
import { InventoryService } from '../services/InventoryServices'

const router = express.Router()

const controller = new InventoryController()

router.post("/", validateRequest(inventorySchema), controller.createItem);
router.get("/", controller.getAllItems);
router.get("/:id", controller.getItemById);
router.put("/:id", validateRequest(inventorySchema), controller.updateItem);
router.delete("/:id", controller.deleteItem);

export default router;