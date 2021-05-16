import { createAsyncThunk} from '@reduxjs/toolkit';
import * as http from 'components/Imports';


/**
 * get users that like you
 */

 export const getLikers = createAsyncThunk(
    'likes/getLikers',
      async (data, thunk) => {
        return http.getHttp(data, thunk);
    }
  );


  /**
 * get users you like
 */

 export const getLikes = createAsyncThunk(
    'likes/getLikes',
      async (data, thunk) => {
        return http.getHttp(data, thunk);
    }
  );

  /**
   * like a user
   */
  export const like = createAsyncThunk(
    'likes/like',
      async (data, thunk) => {
        return http.postHttp(data, thunk);
    }
  );

/**
 * unlikes a user
 */
  export const unlike = createAsyncThunk(
    'likes/unlike',
      async (data, thunk) => {
        return http.postHttp(data, thunk);
    }
  );
