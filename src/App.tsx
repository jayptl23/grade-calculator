import {useState} from 'react'
import AssessentForm from './components/AssessentForm'
import AssessmentList from './components/AssessmentList'
import {Assessments, IAssessment} from './definitions'
import {SAMPLE_ASSESSMENTS} from './mock-data'
import {getFinalGrade, isWeightSumOneHundred} from './utils'

const initialState = SAMPLE_ASSESSMENTS
const App = () => {
	// List of assessments to render
	const [assessments, setAssessments] = useState<Assessments>([])

	// Final Grade
	const [finalGrade, setFinalGrade] = useState<string>('')

	const handleCalculateFinalGradeClick = () => {
		setFinalGrade(getFinalGrade(assessments).toString())
	}

	const addAssessment = (newAssessment: IAssessment) => {
		setAssessments(prevAssessments => [...prevAssessments, newAssessment])
	}

	const calculateGrade = isWeightSumOneHundred(assessments) ? <button onClick={handleCalculateFinalGradeClick}>Calculate Final Grade</button> : null
	return (
		<div>
			{calculateGrade ? calculateGrade : <AssessentForm addAssessment={addAssessment} />}
			<AssessmentList assessments={assessments} />
			{finalGrade && <p>Final Grade: {finalGrade}</p>}
		</div>
	)
}

export default App
