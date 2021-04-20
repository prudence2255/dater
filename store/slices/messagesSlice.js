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
     },

    tempMsg: (state, action) => {
      state.thread = {
     ...state.thread,
        messages: [
          ...state.thread?.messages,
          {body: action.payload.body, type: action.payload.type, 
            user_id: action.payload.user_id,
          file_url: action.payload.file_url
          } 
        ]
      }
    },
    
    tempAddMsg: (state, action) => {
      state.thread = {
        messages: [
          {body: action.payload.body, type: action.payload.type, 
            user_id: action.payload.user_id,
          file_url: action.payload.file_url
          } 
        ]
      }
    }, 

    addRealTimeThread: (state, action) => {
      state.threads = [action.payload.thread, ...state.threads];
    },

    updateRealTimeThread: (state, action) => {
      console.log(action.payload.thread)
      const threadIndex = state.threads.findIndex((thread) => thread.id === action.payload.thread.id);
      const newThreads = [...state.threads]   
       newThreads[threadIndex] = Object.assign({}, newThreads[threadIndex], action.payload.thread)
       state.threads = newThreads;
       if(state.thread?.id === newThreads[threadIndex]?.id){
        state.thread = newThreads[threadIndex];
       }
       
    }
  },
  
  extraReducers: {
    [actions.getThreads.fulfilled]: (state, action) => {
      state.threads = action.payload.data.data;
    },

    [actions.addThread.fulfilled]: (state, action) => {
     state.threads = [action.payload.data.data, ...state.threads];
    },

    [actions.updateThread.fulfilled]: (state, action) => {
    
      const threadIndex = state.threads.findIndex((thread) => thread.id === action.payload.data.data.id);
      const newThreads = [...state.threads]   
       newThreads[threadIndex] = Object.assign({}, newThreads[threadIndex], action.payload.data.data)
       state.threads = newThreads;
       state.thread = newThreads[threadIndex];
     },
  
     [actions.getThread.fulfilled]: (state, action) => {
      const threadIndex = state.threads.findIndex((thread) => thread.id === action.payload.data.data.id);
      const newThreads = [...state.threads]   
       newThreads[threadIndex] = Object.assign({}, newThreads[threadIndex], action.payload.data.data)
       state.threads = newThreads;
       state.thread = newThreads[threadIndex];
     },
  }

});

export const {
    setThread,
    tempMsg,
    tempAddMsg,
    addRealTimeThread,
    updateRealTimeThread
} = messagesSlice.actions


export const messagesSelector = createSelector(
   (state) => ({
     thread: state.messages.thread,
     threads: state.messages.threads   
    }),

    (state) => state
)

export default messagesSlice.reducer
