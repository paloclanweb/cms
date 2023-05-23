import { type FC, type ReactElement, Suspense, useMemo } from 'react'
import { Await } from  'react-router-dom'
import type { DynamicLoadProps } from './type'
import { Loader } from './style'
import { Box } from '@/components'

const DynamicLoad: FC<DynamicLoadProps> = ({ data, children }: DynamicLoadProps): ReactElement => {
	const errorElement = useMemo(() => {
		return (
			<Box>{'Could not load reviews 😬'}</Box>
		)
	}, [])

	const loader = useMemo(() => {
		return (
			<Loader />
		)
	}, [])
    
	return (
		<Suspense fallback={loader}>
			<Await
				resolve={data}
				errorElement={errorElement}
			>
				{children}
			</Await>
		</Suspense>
	)
}

export default DynamicLoad