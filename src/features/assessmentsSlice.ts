import { createSlice } from "@reduxjs/toolkit";
import { Assessments, IAssessment } from "../definitions";
import { SAMPLE_ASSESSMENTS } from "../mock-data";

interface State {
    assessments: Assessments
    weightSum: number
}

let resLocal = localStorage.getItem('assessmentState')
console.log('Fetching from local storage: ', resLocal)
const data = resLocal !== null ? JSON.parse(resLocal) as State : null

const initialState: State = data ?? {
    assessments: SAMPLE_ASSESSMENTS,
    weightSum: 40 
}

const assessmentsSlice = createSlice({
    name: 'assessments',
    initialState,
    reducers: {
        addAssessment: (state, action) => {
            console.log(action)
            state.assessments.push(action.payload)
            state.weightSum += action.payload.weight
            localStorage.setItem('assessmentState', JSON.stringify(state))
        },
        deleteAssessment: (state, action) => {
            const index = state.assessments.findIndex((assessment: IAssessment) => assessment.id === action.payload)
            const assessmentToBeDeleted = state.assessments[index]
            state.weightSum -= assessmentToBeDeleted.weight
            state.assessments.splice(index, 1)
            localStorage.setItem('assessmentState', JSON.stringify(state))
        },
    }
})

export const {addAssessment, deleteAssessment} = assessmentsSlice.actions

export default assessmentsSlice.reducer