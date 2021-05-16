import { createAsyncThunk} from '@reduxjs/toolkit';
import * as http from 'components/Imports';


/**
 * get Friends
 */

 export const getFriends = createAsyncThunk(
    'friends/getFriends',
      async (data, thunk) => {
        return http.getHttp(data, thunk);
    }
  );


  /**
 * get auth user Friends
 */

 export const getAuthUserFriends = createAsyncThunk(
    'friends/getAuthUserFriends',
      async (data, thunk) => {
        return http.getHttp(data, thunk);
    }
  );

/**
 * get Friend requests
 */

 export const getFriendRequests = createAsyncThunk(
    'friends/getFriendRequests',
      async (data, thunk) => {
        return http.getHttp(data, thunk);
    }
  );

  /**
 * get Friend requests
 */

 export const myFriendRequests = createAsyncThunk(
    'friends/myFriendRequests',
      async (data, thunk) => {
        return http.getHttp(data, thunk);
    }
  );

  /**
 * sends a friend request
 */

 export const sendFriendRequest = createAsyncThunk(
    'friends/sendFriendRequest',
      async (data, thunk) => {
        return http.postHttp(data, thunk);
    }
  );

  /**
 * accepts a friend request
 */

 export const acceptFriendRequest = createAsyncThunk(
    'friends/acceptFriendRequest',
      async (data, thunk) => {
        return http.postHttp(data, thunk);
    }
  );


  /**
 * rejects a friend request
 */

 export const rejectFriendRequest = createAsyncThunk(
    'friends/rejectFriendRequest',
      async (data, thunk) => {
        return http.postHttp(data, thunk);
    }
  );
