 class ApiError extends Error {
   constructor(message = "Something went wrong", statusCode, errors= [], statck ='') {
     super(message);
    this.data=null;
     this.statusCode = statusCode;
     this.message = message;
     this.success = false;
     this.errors = errors;


     if (statck) {
        this.stack = statck;
     }
     else{
        Error.captureStackTrace(this, this.constructor);
     }
   }
 }
export { ApiError };