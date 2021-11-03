import {IAssessment} from '../definitions'

type Props = {
	assessment: IAssessment
}

const AssessmentItem = ({assessment}: Props) => {
	const {name, weight, score, total} = assessment
	return (
		<article>
			<p>{`${name} | Weight: ${weight}% | Mark: ${score}/${total}`}</p>
			<button>Delete</button>
		</article>
	)
}

export default AssessmentItem
