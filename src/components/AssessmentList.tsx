import {useAppSelector} from '../app/hooks'
import AssessmentItem from './AssessmentItem'

const AssessmentList = () => {
	const assessments = useAppSelector(state => state.assessments.assessments)
	return (
		<section className='divide-y-2 divide-gray-200 space-y-1'>
			{assessments.map(assessment => (
				<AssessmentItem key={assessment.id} assessment={assessment} />
			))}
		</section>
	)
}

export default AssessmentList
