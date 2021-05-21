import { createSlice, createSelector} from '@reduxjs/toolkit'
import {getViews} from 'store/actions/viewAction';
 


/**
 * view slice// state
 */
  
 const viewsSlice = createSlice({
  name: 'views',
  initialState: {
    views: [],
  },

  reducers: {  },

  extraReducers: {
     [getViews?.fulfilled]: (state, action) => {
      state.views = action.payload.data.data;
    },

  }

});



export const viewsSelector = createSelector(
   (state) => ({
       views: state.views.views,
    }),

    (state) => state
)

export default viewsSlice.reducer
