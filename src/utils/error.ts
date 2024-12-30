//Error

// Error Handling
export class NotFoundError extends Error{
    constructor(message:string){
        // Call the parent constructor
        super(message)
        // Set the name of the Error class
        this.name = 'NotFoundError'
    }
}

export class ValidationError extends Error{
    // Constructor to set the name of the Error class
    constructor(message:string){
        super(message)
        this.name = 'ValidationError'
    }
}