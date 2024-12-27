//Error Handling

import { Request,Response,NextFunction } from "express";
import { ValidationError,NotFoundError } from "../utils/error";

export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction) =>{
    console.error(err)

    if(err instanceof ValidationError){
        return res.status(400).json({success:false,error:err.message})
    }

    if(err instanceof NotFoundError){
        return res.status(400).json({success:false,error:err.message})
    }

    return res.status(500).json({sucess:false,error:'Internal Server Error'})
}

