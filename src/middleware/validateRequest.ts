import { NextFunction, Request,Response, } from "express";
import { ObjectSchema } from "joi";

export const validateRequest = (schema:ObjectSchema)=>{
    return(req:Request,res:Response,next:NextFunction) =>{
        const {error} = schema.validate(req.body,{abortEarly:false})

        if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).json({ success: false, message: 'Validation error', errors });
    }
    next();
    }
}