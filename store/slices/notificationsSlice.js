
import { createSlice, createSelector} from '@reduxjs/toolkit'
import {getNotifications} from 'store/actions/notificationAction';
 


/**
 * notification slice// state
 */
  
 const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    notification: {} 
  },

  reducers: {
      setNotification: (state, action) => {
        state.notification = action.payload
      }
  },

  extraReducers: {
     [getNotifications?.fulfilled]: (state, action) => {
      state.notifications = action.payload.data;
    },

  }

});


export const {
  setNotification,
} = notificationsSlice.actions


export const notificationsSelector = createSelector(
   (state) => ({
        notification: state.notifications.notification,
       notifications: state.notifications.notifications,
    }),

    (state) => state
)

export default notificationsSlice.reducer
