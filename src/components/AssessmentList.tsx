import {Assessments} from '../definitions'
import AssessmentItem from './AssessmentItem'

type Props = {
	assessments: Assessments
}

const AssessmentList = ({assessments}: Props) => {
	return (
		<section>
			{assessments.map(assessment => (
				<AssessmentItem key={assessment.name} assessment={assessment} />
			))}
		</section>
	)
}

export default AssessmentList
