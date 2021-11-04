import {useAppDispatch, useAppSelector} from './app/hooks'
import AssessentForm from './components/AssessentForm'
import AssessmentList from './components/AssessmentList'
import {setGrade} from './features/gradeSlice'
import {getFinalGrade} from './utils'

const App = () => {
	// Fetch state
	const assessments = useAppSelector(state => state.assessments.assessments)
	const weightSum = useAppSelector(state => state.assessments.weightSum)
	const finalGrade = useAppSelector(state => state.finalGrade)

	const dispatch = useAppDispatch()

	const handleCalculateFinalGradeClick = () => {
		const finalGrade = getFinalGrade(assessments)
		dispatch(setGrade(finalGrade))
	}

	const calculateGrade = weightSum === 100 ? <button onClick={handleCalculateFinalGradeClick}>Calculate Final Grade</button> : null
	return (
		<div>
			{calculateGrade ? calculateGrade : <AssessentForm />}
			<AssessmentList />
			{finalGrade !== null && <p>Final Grade: {finalGrade}</p>}
		</div>
	)
}

export default App
