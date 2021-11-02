export interface IAssessment {
    name: string
    weight: number
    score: number
    total: number
}

export type Assessments = Array<IAssessment>