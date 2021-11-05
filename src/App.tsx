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

	const calculateGrade =
		weightSum === 100 ? (
			<button className='bg-green-600 text-white font-medium w-full py-1 rounded' onClick={handleCalculateFinalGradeClick}>
				Calculate Final Grade
			</button>
		) : null
	return (
		<div className='border-2 border-solid border-red-500 h-screen p-2 sm:max-w-md sm:mx-auto'>
			<div className='mb-2'>{calculateGrade ? calculateGrade : <AssessentForm />}</div>
			{finalGrade !== null && <p className='mb-2 text-center font-medium'>Final Grade: {finalGrade}</p>}
			<AssessmentList />
		</div>
	)
}

export default App
