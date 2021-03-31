
import { createSlice, createSelector} from '@reduxjs/toolkit';

/**
 * reducer dedicated for loaders
 */

const loadersSlice = createSlice({
    name: 'loaders',
    initialState: {
        loading: false,
        status: 'idle',
    },

    reducers: {
        startLoading: (state) => {
            state.loading = true
        },

        endLoading: (state) => {
            state.loading = false
        },

        statusIdle: (state) => {
        state.status = 'idle'
       },

        statusSucceeded: (state) => {
        state.status = 'succeeded'
       },
       
        statusRejected: (state) => {
        state.status = 'rejected'
       },

    }
})


export const {
    startLoading, endLoading,
    statusIdle, statusSucceeded,
    statusRejected
} = loadersSlice.actions

export const loadersSelector = createSelector(
   (state) => ({
        loading: state.loaders.loading,
        status: state.loaders.status,
    }),

    (state) => state
)

export default loadersSlice.reducer
