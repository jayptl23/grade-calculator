import { createSlice } from "@reduxjs/toolkit";

type State = null | number

const initialState: State = null

const gradeSlice = createSlice({
    name: "grade",
    initialState,
    reducers: {
        setGrade: (state, action) => {
            state = action.payload
            return state
        }
    }
})

export const {setGrade} = gradeSlice.actions
export default gradeSlice.reducer