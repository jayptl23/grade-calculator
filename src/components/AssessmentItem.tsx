import {IAssessment} from '../definitions'

type Props = {
	assessment: IAssessment
}

const AssessmentItem = ({assessment}: Props) => {
	const {name, weight, score, total} = assessment
	return <p>{`${name} | ${weight}% | Mark: ${score}/${total}`}</p>
}

export default AssessmentItem
