import {v4 as uuidv4} from 'uuid'
import { Assessments } from "./definitions";

export const SAMPLE_ASSESSMENTS: Assessments = [
    {
        id: uuidv4(),
        name: "Test 1",
        weight: 20,
        score: 74,
        total: 100 
    },
    {
        id: uuidv4(),
        name: "Test 2",
        weight: 20,
        score: 84,
        total: 100 
    },
    // {
    //     id: uuidv4(),
    //     name: "Final Exam",
    //     weight: 60,
    //     score: 68,
    //     total: 100 
    // },
]