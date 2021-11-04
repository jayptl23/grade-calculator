import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {useAppDispatch} from '../app/hooks'
import {IAssessment} from '../definitions'
import {addAssessment} from '../features/assessmentsSlice'

const AssessentForm = () => {
	const [assessmentName, setAssessmentName] = useState<string>('')
	const [weight, setWeight] = useState<string>('')
	const [score, setScore] = useState<string>('')
	const [total, setTotal] = useState<string>('')

	const dispatch = useAppDispatch()

	const handleAddAssessmentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const newAssesment: IAssessment = {
			id: uuidv4(),
			name: assessmentName,
			weight: parseFloat(weight),
			score: parseFloat(score),
			total: parseFloat(total),
		}

		dispatch(addAssessment(newAssesment))

		setAssessmentName('')
		setWeight('')
		setScore('')
		setTotal('')
	}

	return (
		<form onSubmit={event => handleAddAssessmentSubmit(event)}>
			<input name='assessmentName' required type='text' placeholder='Name' onChange={event => setAssessmentName(event.target.value)} value={assessmentName} />
			<input name='weight' required type='number' placeholder='Weight %' onChange={event => setWeight(event.target.value)} value={weight} />
			<input name='score' required type='number' placeholder='Score' onChange={event => setScore(event.target.value)} value={score} /> {'/ '}
			<input name='total' required type='number' placeholder='Total' onChange={event => setTotal(event.target.value)} value={total} />
			{<button type='submit'>Add Assessment</button>}
		</form>
	)
}

export default AssessentForm
