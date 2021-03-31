
import { createSlice, createSelector} from '@reduxjs/toolkit';
import locations from 'store/data/locations';
import * as actions from 'components/Imports';
 

const countries = locations?.data.map((location) => location.country)
/**
 * user slice// state
 */
 const cookies = new actions.Cookies();
  
 const usersSlice = createSlice({
  name: 'users',
  initialState: {
   countries: countries,
   cities: [],
   user: {},
   users: []
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
     [actions.login.fulfilled]: (state, action) => {
      cookies.set('token', action.payload.data.token, {path: '/', maxAge: 315360000})
     },
    
     [actions.logout.fulfilled]: (state) => {
      cookies.remove('token', {path: '/'}); 
      state = {}
     },

     [actions.register.fulfilled]: (state, action) => {
       console.log(action.payload.data);
      cookies.set('token', action.payload.data.token, {path: '/', maxAge: 315360000})
     },
  
  }

});

export const {
  setCities
} = usersSlice.actions


export const usersSelector = createSelector(
   (state) => ({
      countries: state.users.countries,
      cities: state.users.cities 
    }),

    (state) => state
)

export default usersSlice.reducer
