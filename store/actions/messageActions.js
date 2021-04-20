import { createAsyncThunk} from '@reduxjs/toolkit';
import * as http from 'components/Imports';


/**
 * get threads
 */

export const getThreads = createAsyncThunk(
    'messages/getThreads',
      async (data, thunk) => {
        return http.getHttp(data, thunk);
    }
  );


  /**
 * adds a new thread
 */

export const addThread = createAsyncThunk(
  'messages/addThread',
    async (data, thunk) => {
      return http.postHttp(data, thunk);
  }
);


/**
 * updates a thread
 */

 export const updateThread = createAsyncThunk(
  'messages/updateThread',
    async (data, thunk) => {
      return http.postHttp(data, thunk);
  }
);

/**
 * get thread
 */

 export const getThread = createAsyncThunk(
  'messages/getThread',
    async (data, thunk) => {
      return http.getHttp(data, thunk);
  }
);
