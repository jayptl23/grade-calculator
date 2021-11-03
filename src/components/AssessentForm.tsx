import {useState} from 'react'
import {IAssessment} from '../definitions'
type Props = {
	addAssessment: (assessment: IAssessment) => void
}

const AssessentForm = ({addAssessment}: Props) => {
	const [assessmentName, setAssessmentName] = useState<string>('')
	const [weight, setWeight] = useState<string>('')
	const [score, setScore] = useState<string>('')
	const [total, setTotal] = useState<string>('')

	const handleAddAssessmentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const newAssesment: IAssessment = {
			name: assessmentName,
			weight: parseFloat(weight),
			score: parseFloat(score),
			total: parseFloat(total),
		}

		addAssessment(newAssesment)
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
