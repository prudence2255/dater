
import { createSlice, createSelector} from '@reduxjs/toolkit'
import * as actions from 'components/Imports';
 


/**
 * message slice// state
 */
  
 const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    threads: [],
    thread: {}
  },


  reducers: {
    setThread: (state, action) => {
        state.thread = action.payload
     }
  },
  
  extraReducers: {
    [actions.getThreads.fulfilled]: (state, action) => {
      state.threads = action.payload.data.data;
    },

    [actions.addThread.fulfilled]: (state, action) => {
     state.threads = [action.payload.data, ...state.threads];
    },

    [actions.updateThread.fulfilled]: (state, action) => {
      const threadIndex = state.threads.findIndex((thread) => thread.id === action.payload.data.id);
      const newThreads = [...state.threads]   
       newThreads[threadIndex] = Object.assign({}, newThreads[threadIndex], action.payload.data)
       state.threads = newThreads
     }, 
  }

});

export const {
    setThread,
} = messagesSlice.actions


export const messagesSelector = createSelector(
   (state) => ({
     thread: state.messages.thread,
     threads: state.messages.threads   
    }),

    (state) => state
)

export default messagesSlice.reducer
