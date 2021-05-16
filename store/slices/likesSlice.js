import { createSlice, createSelector} from '@reduxjs/toolkit'
import {getLikes, getLikers, like, unlike} from 'store/actions/likeAction';
 


/**
 * like slice// state
 */
  
 const likesSlice = createSlice({
  name: 'likes',
  initialState: {
    likes: [],
    likers: [],

  },

  reducers: { 

   },

  extraReducers: {
     [getLikes.fulfilled]: (state, action) => {
      state.likes = action.payload.data.data;
    },

    [getLikers.fulfilled]: (state, action) => {
        state.likers = action.payload.data.data;
    },

    [like.fulfilled]: (state, action) => {
        state.like = action.payload.data.data;
    },
   
    [unlike.fulfilled]: (state, action) => {
    state.unlike = action.payload.data.data;
    },

  }

});


export const likesSelector = createSelector(
   (state) => ({
       likes: state.likes.likes,
       likers: state.likes.likers,
    }),

    (state) => state
)

export default likesSlice.reducer
