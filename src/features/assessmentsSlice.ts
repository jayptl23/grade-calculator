import { createSlice } from "@reduxjs/toolkit";
import { Assessments, IAssessment } from "../definitions";
import { SAMPLE_ASSESSMENTS } from "../mock-data";

const initialState: Assessments = SAMPLE_ASSESSMENTS

const assessmentsSlice = createSlice({
    name: 'assessments',
    initialState,
    reducers: {
        addAssessment: (state, action) => {
            console.log(action)
            state.push(action.payload)
        },
        deleteAssessment: (state, action) => {
            console.log(action)
            const index = state.findIndex((assessment: IAssessment) => assessment.id === action.payload)
            state.splice(index, 1)
        }
    }
})

export const {addAssessment, deleteAssessment} = assessmentsSlice.actions

export default assessmentsSlice.reducer