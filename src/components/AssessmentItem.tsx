import {useAppDispatch, useAppSelector} from '../app/hooks'
import {IAssessment} from '../definitions'
import {decrementWeightSum, deleteAssessment} from '../features/assessmentsSlice'
import {setGrade} from '../features/gradeSlice'

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
		<article>
			<p>{`${name} | Weight: ${weight}% | Mark: ${score}/${total}`}</p>
			<button onClick={handleDeleteClick}>Delete</button>
		</article>
	)
}

export default AssessmentItem
