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
 * logs a new user out
 */

 export const logout = createAsyncThunk(
  'users/logout',
    async (data, thunk) => {
      return http.postHttp(data, thunk);
  }
);

/**
 * display a list of users
 */

 export const getUsers = createAsyncThunk(
  'users/getUsers',
    async (data, thunk) => {
      return http.getHttp(data, thunk);
  }
);

/**
 * display a single user
 */

 export const getUser = createAsyncThunk(
  'users/getUser',
    async (data, thunk) => {
      return http.getHttp(data, thunk);
  }
);

/**
 * updates user details
 */

 export const updateUser = createAsyncThunk(
  'users/updateUser',
    async (data, thunk) => {
      return http.putHttp(data, thunk);
  }
);

/**
 * deletes a user
 */

 export const deleteUser = createAsyncThunk(
  'users/deleteUser',
    async (data, thunk) => {
      return http.deleteHttp(data, thunk);
  }
);

/**
 * add or create more user info
 */

 export const addUserMeta = createAsyncThunk(
  'users/addUserMeta',
    async (data, thunk) => {
      return http.postHttp(data, thunk);
  }
);

/**
 * uploads a photo
 */

 export const photoUpload = createAsyncThunk(
  'users/photoUpload',
    async (data, thunk) => {
      return http.postHttp(data, thunk);
  }
);

/**
 * get photos
 */

 export const getPhotos = createAsyncThunk(
  'users/getPhotos',
    async (data, thunk) => {
      return http.publicGetHttp(data, thunk);
  }
);

/**
 * uploads a profile pic
 */

 export const uploadProfilePic = createAsyncThunk(
  'users/uploadProfilePic',
    async (data, thunk) => {
      return http.postHttp(data, thunk);
  }
);


/**
 * display current user
 */

 export const authUser = createAsyncThunk(
  'users/authUser',
    async (data, thunk) => {
      return http.getHttp(data, thunk);
  }
);


  