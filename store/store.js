import {combineReducers} from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import loadersReducer from 'store/slices/loadersSlice';
import errorsReducer from 'store/slices/errorsSlice';
import adminsReducer from 'store/slices/adminSlice'; 
import messagesReducer from 'store/slices/messagesSlice'; 
import usersReducer from 'store/slices/usersSlice'; 
import { HYDRATE, createWrapper } from 'next-redux-wrapper';


/**
 * the combine reducer
 */




const rootReducer = combineReducers({ 
                   loaders: loadersReducer,
                   errors: errorsReducer,
                   admins: adminsReducer,
                   messages: messagesReducer,
                   users: usersReducer
                  });

                  /**
                   * returns the hydrated state from the server
                   * @param {object} state 
                   * @param {object} action 
                   */
  const hydrateReducer = (state = {}, action) => {
  if(action.type === HYDRATE){
    return {
      ...state,
      ...action.payload
    }
  }
  return rootReducer(state, action)
}


/**
 * the store
 */
const makeStore = () => {
  const store = configureStore({
          reducer: hydrateReducer,
            middleware: getDefaultMiddleware({
                serializableCheck: false,
                immutableCheck: false
            })
          
        })
   return store     
}

/**
 * create a redux wrapper
 */
export const wrapper = createWrapper(makeStore, {debug: true});





