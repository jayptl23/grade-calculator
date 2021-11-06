import {useAppDispatch, useAppSelector} from '../app/hooks'
import {IAssessment} from '../definitions'
import {decrementWeightSum, deleteAssessment} from '../features/assessmentsSlice'
import {setGrade} from '../features/gradeSlice'
import {XCircleIcon} from '@heroicons/react/outline'

type Props = {
	assessment: IAssessment
}

const AssessmentItem = ({assessment}: Props) => {
	const finalGrade = useAppSelector(state => state.finalGrade)
	const {id, name, weight, score, total} = assessment

	const dispatch = useAppDispatch()

	const handleDeleteClick = () => {
		if (finalGrade) {
			dispatch(setGrade(null))
		}
		dispatch(deleteAssessment(id))
		dispatch(decrementWeightSum(weight))
	}

	return (
		<article className='text-sm flex items-center justify-between px-1'>
			<div>
				<p className='font-semibold text-gray-600'>{`${name} • Weight: ${weight}%`}</p>
				<p className='text-xs'>{`Mark: ${score}/${total}`}</p>
			</div>
			<XCircleIcon onClick={handleDeleteClick} className='h-6 text-red-600 cursor-pointer' />
			{/* <button onClick={handleDeleteClick}>
				<XCircleIcon />
			</button> */}
		</article>
	)
}

export default AssessmentItem
