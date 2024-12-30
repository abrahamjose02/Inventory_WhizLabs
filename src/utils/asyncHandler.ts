import { Request,Response,NextFunction } from "express";

//Function to handle async errors
export const asyncHandler = (fn:Function) =>(
    req:Request,
    res:Response,
    next:NextFunction
) =>{
    //Promise.resolve() is used to handle both promise and non-promise errors
    Promise.resolve(fn(req,res,next)).catch(next)
};