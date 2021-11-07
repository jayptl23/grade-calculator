import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {useAppDispatch} from '../app/hooks'
import {IAssessment} from '../definitions'
import {addAssessment} from '../features/assessmentsSlice'
import {setErrors} from '../features/errorSlice'
import {isAssessmentValid} from '../utils'

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

		const errors = isAssessmentValid(newAssesment)
		if (errors.length !== 0) {
			dispatch(setErrors(errors))
			return
		}
		// dispatch action to set errors to empty
		dispatch(setErrors(errors))
		dispatch(addAssessment(newAssesment))

		setAssessmentName('')
		setWeight('')
		setScore('')
		setTotal('')
	}

	return (
		<form className='w-full space-y-' onSubmit={event => handleAddAssessmentSubmit(event)}>
			<div>
				<label className='label'>Name</label>
				<input className='input' name='assessmentName' required type='text' placeholder='Final Exam' onChange={event => setAssessmentName(event.target.value)} value={assessmentName} />
			</div>
			<section className='flex space-x-1'>
				<div className='flex-1'>
					<label className='label'>Weight (%)</label>
					<input className='input' name='weight' required type='number' min='1' max='100' placeholder='60' onChange={event => setWeight(event.target.value)} value={weight} />
				</div>
				<div className='flex-1'>
					<label className='label'>Score</label>
					<input className='input' name='score' required type='number' step='any' min='1' placeholder='75' onChange={event => setScore(event.target.value)} value={score} />
				</div>
				<div className='flex-1'>
					<label className='label'>Total </label>
					<input className='input' name='total' required type='number' min='1' placeholder='100' onChange={event => setTotal(event.target.value)} value={total} />
				</div>
			</section>
			<button className='bg-green-500 text-white font-medium w-full py-1 rounded mt-2' type='submit'>
				Add Assessment
			</button>
		</form>
	)
}

export default AssessentForm
