//Error Handling

import { Request,Response,NextFunction } from "express";
import { ValidationError,NotFoundError } from "../utils/error";

export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction):void =>{
    console.error(err)

    if(err instanceof ValidationError){
         res.status(400).json({success:false,error:err.message})
    }

    if(err instanceof NotFoundError){
         res.status(400).json({success:false,error:err.message})
    }

     res.status(500).json({sucess:false,error:'Internal Server Error'})
}

