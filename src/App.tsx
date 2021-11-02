import {useState} from 'react'
import AssessmentItem from './components/AssessmentItem'
import {Assessments} from './definitions'
import {SAMPLE_ASSESSMENTS} from './mock-data'

const initialState = SAMPLE_ASSESSMENTS
const App = () => {
	const [assessments, setAssessments] = useState<Assessments>(initialState)
	return (
		<div>
			{assessments.map(assessment => (
				<AssessmentItem assessment={assessment} />
			))}
		</div>
	)
}

export default App
