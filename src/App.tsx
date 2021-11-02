import {useState} from 'react'
import AssessmentItem from './components/AssessmentItem'
import {Assessments} from './definitions'
import {SAMPLE_ASSESSMENTS} from './mock-data'
import {getFinalGrade, isWeightSumOneHundred} from './utils'

const initialState = SAMPLE_ASSESSMENTS
const App = () => {
	const [assessments, setAssessments] = useState<Assessments>(initialState)

	const handleClick = () => {
		console.log(getFinalGrade(assessments))
	}
	const calculateGrade = isWeightSumOneHundred(assessments) ? <button onClick={handleClick}>Calculate Final Grade</button> : null
	return (
		<div>
			{assessments.map(assessment => (
				<AssessmentItem assessment={assessment} />
			))}
			{calculateGrade}
		</div>
	)
}

export default App
