import { createSlice } from "@reduxjs/toolkit";

type State = null | number

let finalGrade = localStorage.getItem('finalGrade')
const initialState: State = finalGrade !== null ? JSON.parse(finalGrade) : null

const gradeSlice = createSlice({
    name: "grade",
    initialState,
    reducers: {
        setGrade: (state, action) => {
            state = action.payload
            localStorage.setItem('finalGrade', JSON.stringify(action.payload))
            return state
        }
    }
})

export const {setGrade} = gradeSlice.actions
export default gradeSlice.reducer