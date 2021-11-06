import { createSlice } from "@reduxjs/toolkit";
import { Assessments, IAssessment } from "../definitions";
import { SAMPLE_ASSESSMENTS } from "../mock-data";

interface State {
    assessments: Assessments
    weightSum: number
}

const initialState: State = {
    assessments: SAMPLE_ASSESSMENTS,
    weightSum: 40 
}

const assessmentsSlice = createSlice({
    name: 'assessments',
    initialState,
    reducers: {
        addAssessment: (state, action) => {
            state.assessments.push(action.payload)
        },
        deleteAssessment: (state, action) => {
            const index = state.assessments.findIndex((assessment: IAssessment) => assessment.id === action.payload)
            state.assessments.splice(index, 1)
        },
        incrementWeightSum: (state, action) => {
            state.weightSum += action.payload
        },
        decrementWeightSum: (state, action) => {
            state.weightSum -= action.payload
        }
    }
})

export const {addAssessment, deleteAssessment, incrementWeightSum, decrementWeightSum} = assessmentsSlice.actions

export default assessmentsSlice.reducer