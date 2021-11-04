import {useState} from 'react'
import {useAppSelector} from './app/hooks'
import AssessentForm from './components/AssessentForm'
import AssessmentList from './components/AssessmentList'
import {getFinalGrade, isWeightSumOneHundred} from './utils'

const App = () => {
	// Fetch state
	const assessments = useAppSelector(state => state.assessments)

	// Final Grade
	const [finalGrade, setFinalGrade] = useState<string>('')

	const handleCalculateFinalGradeClick = () => {
		setFinalGrade(getFinalGrade(assessments).toString())
	}

	const calculateGrade = isWeightSumOneHundred(assessments) ? <button onClick={handleCalculateFinalGradeClick}>Calculate Final Grade</button> : null
	return (
		<div>
			{calculateGrade ? calculateGrade : <AssessentForm />}
			<AssessmentList />
			{finalGrade && <p>Final Grade: {finalGrade}</p>}
		</div>
	)
}

export default App
