 import { Assessments, IAssessment } from "./definitions";

// Utility functions
const sumWeights = (assessments: Assessments): number => {
    const reducer = (previousSum: number, assessment: IAssessment) => previousSum + assessment.weight
    const sum = assessments.reduce(reducer, 0)
    return sum
}

const weightAsDecimal = (weight: number): number => weight / 100

const getGrade = (score: number, total: number): number => score / total

export const getFinalGrade = (assessments: Assessments) => {
    const reducer = (previousSum: number, assessment: IAssessment) => {
        const {weight, score, total } = assessment
        let decimalWeight = weightAsDecimal(weight)
        let grade = getGrade(score, total)

        return previousSum + decimalWeight * grade
    }

    const sum = assessments.reduce(reducer, 0)
    return sum * 100
}

// Used by components
export const isWeightSumOneHundred = (assessments: Assessments): boolean => {
    return sumWeights(assessments) === 100
}

const isWeightInRange = (weight: number): boolean => weight >= 1 && weight <= 100
const isScoreNonNegative = (score: number): boolean => score >= 0
const doesScoreExceedTotal = (score: number, total: number): boolean => score > total

export const isAssessmentValid = (assessment: IAssessment): string[] => {
    const {weight, score, total} = assessment
    const errors: string[] = []

    if(!isWeightInRange(weight))
        errors.push('Weight must be between 1 and 100')
    
    if(!isScoreNonNegative(score))
        errors.push('Score must be >= 0')
    
    if(doesScoreExceedTotal(score, total))
        errors.push('Score cannot exceed total')

    return errors
}