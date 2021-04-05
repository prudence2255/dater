
/**
 * returns errors
 * @param {object} error 
 */

 const getErrors = (error) => {
   console.log(error.response)
    if(error.response){
      if(error.response?.data?.errors){
        return {
          error: Object.values(error.response?.data?.errors).flat(), 
          code: error.response.status
        }
     }else if(error.response.status === 401){
      return {
        error: ['Unauthenticated'],
        code: error.response.status
      };
     }
     else{
        return {
          error: ['Something went wrong!'],
          code: error.response.status
        };
     }
    }
    if(error.request){
      return {
        error: ['Something went wrong!'],
        code: error.request.status
      };
    }
    return {
      error: ['Something went wrong!'],
      code: 'unknown'
    };
  }
  

  export default getErrors;