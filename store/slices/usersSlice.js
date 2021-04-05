
import { createSlice, createSelector} from '@reduxjs/toolkit';
import locations from 'store/data/locations';
import {login, register, authUser, logout, getUser
  , getUsers, updateUser, deleteUser, addUserMeta, 
  photoUpload, uploadProfilePic, getPhotos} from 'store/actions/userActions';
import Cookies from 'universal-cookie';  
 

const countries = locations?.data.map((location) => location.country)
/**
 * user slice// state
 */
 const cookies = new Cookies();
  
 const usersSlice = createSlice({
  name: 'users',
  initialState: {
   countries: countries,
   cities: [],
   authUser: {},
   user: {},
   users: [],
   photos: [],
   profilePic: {}
  },

  reducers: {
    setCities: (state, action) => {
   locations?.data.map((location) => {
          if(location.country === action.payload){
            state.cities = location.cities;
          }
      })
    }
  },
  extraReducers: {
     [login.fulfilled]: (state, action) => {
      cookies.set('token', action.payload.data.token, {path: '/', maxAge: 315360000})
     },
    
     [logout.fulfilled]: (state) => {
      cookies.remove('token', {path: '/'}); 
      state = {}
     },

     [register.fulfilled]: (state, action) => {
      cookies.set('token', action.payload.data.token, {path: '/', maxAge: 315360000})
     },

     [uploadProfilePic.fulfilled]: (state, action) => {
     console.log('hi');
     },
  
     [authUser.fulfilled]: (state, action) => {
     state.authUser = action.payload.data;
     },

    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload.data;
      state.profilePic = action.payload.data?.profile_pictures?.photos ?? {}
      },

     [updateUser.fulfilled]: (state, action) => {
        state.authUser = action.payload.data;
      },
      
   [uploadProfilePic.fulfilled]: (state, action) => {
        state.profilePic = action.payload.data;
   },

   [photoUpload.fulfilled]: (state, action) => {
    state.photos = [action.payload.data, ...state.photos];
  },

   [getPhotos.fulfilled]: (state, action) => {
    state.photos = action.payload.data;
  },
  
  [getUsers.fulfilled]: (state, action) => {
    state.users = action.payload.data.data;
  }  
  
  }

});

export const {
  setCities
} = usersSlice.actions


export const usersSelector = createSelector(
   (state) => ({
      countries: state.users.countries,
      cities: state.users.cities,
      users: state.users.users,
      authUser: state.users.authUser,
      user: state.users.user,
      photos: state.users.photos,
      profilePic: state.users.profilePic
    }),

    (state) => state
)

export default usersSlice.reducer
