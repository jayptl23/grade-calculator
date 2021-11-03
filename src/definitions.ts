export interface IAssessment {
    id: string
    name: string
    weight: number
    score: number
    total: number
}

export type Assessments = Array<IAssessment>