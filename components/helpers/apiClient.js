import axios from 'axios';
import { startLoading, endLoading} from 'store/slices/loadersSlice';
import getErrors from 'components/helpers/getErrors';
import {setErrors} from 'store/slices/errorsSlice';

const apiUrl = process.env.API_URL;

const apiClient = axios.create({
    baseURL: apiUrl,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
     }
});

/**
 * base http request for all post request with the same implementation
 * @param {object} data 
 * @param {object} thunk 
 */
export const postHttp =  async (data, thunk) => {
    const {
        body,
        url,
    } = data;
    thunk.dispatch(startLoading()); 
    try {
     const res = await apiClient({
        method: 'POST', 
       url: url, 
       data: JSON.stringify(body),
                });
      thunk.dispatch(endLoading());
      return res;  
    } catch (error) {
      console.log(error.response)
      thunk.dispatch(endLoading());
      thunk.dispatch(setErrors(getErrors(error)));
      return thunk.rejectWithValue(error);
    }
  }

  
  /**
 * base http request for all update request with the same implementation
 * @param {object} data 
 * @param {object} thunk 
 */
export const putHttp =  async (data, thunk) => {
    const {
        body,
        url,
    } = data;
    thunk.dispatch(startLoading()); 
    try {
     const res = await apiClient({
        method: 'PUT', 
       url: url, 
       data: JSON.stringify(body),
                });
      thunk.dispatch(endLoading());
      return res;  
    } catch (error) {
      thunk.dispatch(endLoading());
      thunk.dispatch(setErrors(getErrors(error)));
      return thunk.rejectWithValue(error);
    }
  }


  /**
 * base http request for all get request with the same implementation
 * @param {object} data 
 * @param {object} thunk 
 */
  export const getHttp =  async (data, thunk) => {
    const {
        url,
    } = data;
    thunk.dispatch(startLoading()); 
    try {
     const res = await apiClient({
       method: 'GET', 
       url: url, 
                });
      thunk.dispatch(endLoading());
      return res;  
    } catch (error) {
      thunk.dispatch(endLoading());
      thunk.dispatch(setErrors(getErrors(error)));
      return thunk.rejectWithValue(error);
    }
  }

/**
 * base http request for all delete request with the same implementation
 * @param {object} data 
 * @param {object} thunk 
 */
 export const deleteHttp =  async (data, thunk) => {
    const {
        url,
    } = data;
    thunk.dispatch(startLoading()); 
    try {
     const res = await apiClient({
        method: 'DELETE', 
       url: url, 
                });
      thunk.dispatch(endLoading());
      return res;  
    } catch (error) {
      thunk.dispatch(endLoading());
      thunk.dispatch(setErrors(getErrors(error)));
      return thunk.rejectWithValue(error);
    }
  }

  /**
   * adds authorization header
   */

 export const addToken = (token) => {
  return apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
 }