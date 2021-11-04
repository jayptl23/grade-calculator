import {useAppSelector} from '../app/hooks'
import AssessmentItem from './AssessmentItem'

const AssessmentList = () => {
	const assessments = useAppSelector(state => state.assessments)
	return (
		<section>
			{assessments.map(assessment => (
				<AssessmentItem key={assessment.id} assessment={assessment} />
			))}
		</section>
	)
}

export default AssessmentList
