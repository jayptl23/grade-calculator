import { createSlice } from "@reduxjs/toolkit";
import { Assessments } from "../definitions";
import { SAMPLE_ASSESSMENTS } from "../mock-data";

const initialState: Assessments = SAMPLE_ASSESSMENTS

const assessmentsSlice = createSlice({
    name: 'assessments',
    initialState,
    reducers: {
        addAssessment: (state, action) => {
            console.log(action)
            state.push(action.payload)
        }
    }
})

export const {addAssessment} = assessmentsSlice.actions

export default assessmentsSlice.reducer