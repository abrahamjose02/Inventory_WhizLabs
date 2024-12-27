import Joi from 'joi'

export const inventorySchema = Joi.object({
    itemName:Joi.string().required(),
    quantity:Joi.number().min(0).required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().required(),
    category: Joi.string().required()
})