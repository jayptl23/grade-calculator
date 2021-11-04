import {useAppDispatch} from '../app/hooks'
import {IAssessment} from '../definitions'
import {deleteAssessment} from '../features/assessmentsSlice'

type Props = {
	assessment: IAssessment
}

const AssessmentItem = ({assessment}: Props) => {
	const {id, name, weight, score, total} = assessment

	const dispatch = useAppDispatch()

	const handleDeleteClick = () => {
		dispatch(deleteAssessment(id))
	}

	return (
		<article>
			<p>{`${name} | Weight: ${weight}% | Mark: ${score}/${total}`}</p>
			<button onClick={handleDeleteClick}>Delete</button>
		</article>
	)
}

export default AssessmentItem
