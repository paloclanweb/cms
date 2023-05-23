import { useCallback, type FC, type ReactElement } from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { DefaultLayout, DynamicLoad, Modal } from '@/components'
import { type EndpointModel } from '@/service'
import { Route } from '@/constant'
import { Content, Endpoint } from './style'

const Endpoints: FC = (): ReactElement => {
	const endpoints = useLoaderData() as Array<EndpointModel>
	const { state } = useLocation()
	const navigate = useNavigate()

	const onClose = useCallback(() => {
		navigate(Route.Security.Endpoints.Groups.list, { 
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	return (
		<DefaultLayout title={'Endpoint Group / Endpoints'}>
			<DynamicLoad data={endpoints}>
				<Modal open title={'Endpoints'} onClose={onClose}>
					<Content>
						{endpoints.map(endpoint => (
							<Endpoint key={endpoint.Id}>{endpoint.Path}</Endpoint>
						))}
					</Content>
				</Modal>
			</DynamicLoad>
		</DefaultLayout>
	)
}

export default Endpoints