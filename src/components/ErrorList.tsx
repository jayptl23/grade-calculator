import React from 'react'
import {useAppSelector} from '../app/hooks'

const ErrorList = () => {
	const errors = useAppSelector(state => state.errors)
	return (
		<ul className={errors.length > 0 ? 'bg-red-300 text-xs list-disc px-6 py-2 mb-2 text-red-900 rounded-sm' : ''}>
			{errors.map(error => (
				<li>{error}</li>
			))}
		</ul>
	)
}

export default ErrorList
