//Error Handling

import { Request,Response,NextFunction } from "express";
import { ValidationError,NotFoundError } from "../utils/error";

export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction):void =>{
    console.error(err)

    if(res.headersSent){
     return next(err)
    }

    if(err instanceof ValidationError){
         res
           .status(400)
           .json({ success: false, statusCode: 400, error: err.message });
    }

    if(err instanceof NotFoundError){
         res
           .status(404)
           .json({ success: false, statusCode: 404, error: err.message });
    }

     res
       .status(500)
       .json({
         sucess: false,
         statusCode: 500,
         error: "Internal Server Error",
       });
}

