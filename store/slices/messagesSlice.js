
import { createSlice, createSelector} from '@reduxjs/toolkit'

 


/**
 * message slice// state
 */
  
 const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    thread: {}
  },

  reducers: {
    setThread: (state, action) => {
        state.thread = action.payload
     }
  },
  
  extraReducers: {
  }

});

export const {
    setThread,
} = messagesSlice.actions


export const messagesSelector = createSelector(
   (state) => ({
     thread: state.messages.thread   
    }),

    (state) => state
)

export default messagesSlice.reducer
