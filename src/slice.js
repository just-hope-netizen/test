import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: null
    },
    reducers: {
        storeData: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.data  = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { storeData } = dataSlice.actions

export default dataSlice.reducer