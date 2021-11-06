import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = []
const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setErrors: (state, action) => {
           return action.payload
        }
    }

})

export const { setErrors } = errorSlice.actions
export default errorSlice.reducer