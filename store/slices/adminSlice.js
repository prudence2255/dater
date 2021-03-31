
import { createSlice, createSelector} from '@reduxjs/toolkit'

 


/**
 * admin slice// state
 */
  
 const adminsSlice = createSlice({
  name: 'admins',
  initialState: {
   
  },
  reducers: {
  },
  extraReducers: {
     
  }

});

export const adminSelector = createSelector(
   (state) => ({
        
    }),

    (state) => state
)

export default adminsSlice.reducer
