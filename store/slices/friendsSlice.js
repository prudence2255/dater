import { createSlice, createSelector } from '@reduxjs/toolkit'
import {
  getFriends, getFriendRequests, acceptFriendRequest,
  rejectFriendRequest, sendFriendRequest, getAuthUserFriends,
  myFriendRequests
} from 'store/actions/friendActions';



/**
 * view slice// state
 */

const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    friends: [],
    authUserFriends: [],
    friendRequests: [],
    myFriendRequests: []
  },

  reducers: {
    setFriendRequests: (state, action) => {
      state.friendRequests = state.friendRequests.filter(req => req.id !== action.payload.id);
    }
  },

  extraReducers: {
    [getFriends?.fulfilled]: (state, action) => {
      state.friends = action.payload.data.data;
    },

    [getFriendRequests?.fulfilled]: (state, action) => {
      state.friendRequests = action.payload.data.data;
    },

    [myFriendRequests?.fulfilled]: (state, action) => {
      state.myFriendRequests = action.payload.data.data;
    },

    [acceptFriendRequest?.fulfilled]: (state, action) => {
      // state.friendRequests = state.friendRequests.filter(req => req.id !== action.payload.id);
    },

    [sendFriendRequest?.fulfilled]: (state, action) => {
      //state.friends = state.friendRequests.filter(req => req.id !== action.payload.id);
    },

    [rejectFriendRequest?.fulfilled]: (state, action) => {
      //state.friendRequests = state.friendRequests.filter(req => req.id !== action.payload.id);
    },

    [getAuthUserFriends?.fulfilled]: (state, action) => {
      state.authUserFriends = action.payload.data.data;
    },
  }

});


export const {
  setFriendRequests
} = friendsSlice.actions

export const friendsSelector = createSelector(
  (state) => ({
    friends: state.friends.friends,
    authUserFriends: state.friends.authUserFriends,
    friendRequests: state.friends.friendRequests,
    myFriendRequests: state.friends.myFriendRequests,
  }),

  (state) => state
)

export default friendsSlice.reducer
