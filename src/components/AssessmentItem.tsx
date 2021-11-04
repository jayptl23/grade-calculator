import {IAssessment} from '../definitions'

type Props = {
	assessment: IAssessment
}

const AssessmentItem = ({assessment}: Props) => {
	const {id, name, weight, score, total} = assessment

	const handleDeleteClick = () => {
		console.log('Clicked delete', id)
	}

	return (
		<article>
			<p>{`${name} | Weight: ${weight}% | Mark: ${score}/${total}`}</p>
			<button onClick={handleDeleteClick}>Delete</button>
		</article>
	)
}

export default AssessmentItem
