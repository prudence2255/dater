import { createSlice, createSelector} from '@reduxjs/toolkit';


/**
 * reducer for errors
 */
const errorsSlice = createSlice({
    name: 'errors',
    initialState: {
        errors: null,
    },

    reducers: {
    setErrors: (state, action) => {
             state.errors = action.payload.error;
        },
     clearErrors: (state) => {
            state.errors = null;
        }
    }
})

export const {
    setErrors,
    clearErrors
} = errorsSlice.actions

export const errorsSelector = createSelector(
    (state) => ({
         errors : state.errors.errors,
     }),
 
     (state) => state
 )
 
 export default errorsSlice.reducer