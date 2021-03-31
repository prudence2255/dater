
/**
 * returns errors
 * @param {object} error 
 */

 const getErrors = (error) => {
//console.log(error.response)
    if(error.response){
      let err = Object.values(error.response?.data?.errors)?.flat();
      if(Array.isArray(err) && err?.length > 0){
        return {
          error: error.response.data.errors.flat(), 
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