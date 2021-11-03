import {useState} from 'react'
import AssessmentList from './components/AssessmentList'
import {Assessments, IAssessment} from './definitions'
import {SAMPLE_ASSESSMENTS} from './mock-data'
import {getFinalGrade, isWeightSumOneHundred} from './utils'

const initialState = SAMPLE_ASSESSMENTS
const App = () => {
	// List of assessments to render
	const [assessments, setAssessments] = useState<Assessments>(initialState)

	// Form inputs
	const [assessmentName, setAssessmentName] = useState<string>('')
	const [weight, setWeight] = useState<string>('')
	const [score, setScore] = useState<string>('')
	const [total, setTotal] = useState<string>('')

	const handleCalculateFinalGradeClick = () => {
		console.log(getFinalGrade(assessments))
	}

	const handleAddAssessmentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const newAssesment: IAssessment = {
			name: assessmentName,
			weight: parseFloat(weight),
			score: parseFloat(score),
			total: parseFloat(total),
		}

		setAssessments((prevAssessments: Assessments) => [...prevAssessments, newAssesment])
		setAssessmentName('')
		setWeight('')
		setScore('')
		setTotal('')
	}

	const calculateGrade = isWeightSumOneHundred(assessments) ? <button onClick={handleCalculateFinalGradeClick}>Calculate Final Grade</button> : null
	return (
		<div>
			<AssessmentList assessments={assessments} />
			{calculateGrade}
			<form onSubmit={event => handleAddAssessmentSubmit(event)}>
				<input name='assessmentName' required type='text' placeholder='Name' onChange={event => setAssessmentName(event.target.value)} value={assessmentName} />
				<input name='weight' required type='number' placeholder='Weight %' onChange={event => setWeight(event.target.value)} value={weight} />
				<input name='score' required type='number' placeholder='Score' onChange={event => setScore(event.target.value)} value={score} /> {'/ '}
				<input name='total' required type='number' placeholder='Total' onChange={event => setTotal(event.target.value)} value={total} />
				<button type='submit'>Add Assessment</button>
			</form>
		</div>
	)
}

export default App
