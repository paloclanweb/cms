import { type FC, type ReactElement, useMemo, useCallback } from 'react'
import { useLoaderData, useNavigate, useLocation } from 'react-router-dom'
import { Route } from '@/constant'
import { useToast } from '@/hooks'
import { DefaultLayout, DynamicLoad, DataGrid, Grid, Button, IconDelete, IconEdit, IconList } from '@/components'
import { EndpointGroupModel } from '@/service'

const List: FC = (): ReactElement => {
	const toast = useToast()
	const { state } = useLocation()
	const navigate = useNavigate()
	const data = useLoaderData() as Array<EndpointGroupModel>

	const onAction = useCallback((id: string, route: string) => {
		const item = data.find(item => item.Id === id)

		if(!item) {
			return toast({
				message: 'Endpoint group not found',
				status: 'error',
			})
		}

		navigate(route, {
			replace: true,
			state: {
				...state,
				data: item
			}
		})

	}, [state, data])

	const headers = useMemo(() => [
		{
			field: 'Name',
			headerName: 'Name',
		},
	], [])

	const content = useMemo(() => {
		return [...data.map(item => {
			return {
				Id: item.Id,
				Name: item.Name
			}
		})]
	}, [data])
    
	const actions = useMemo(() => {
		return [
			{
				text: 'View Endpoints',
				icon: <IconList />,
				onAction: (id: string) => onAction(id, Route.Security.Endpoints.Groups.endpoints(id))
			},
			{
				text: 'Edit Roles and Permissions',
				icon: <IconEdit />,
				onAction: (id: string) => onAction(id, Route.Security.Endpoints.Groups.rolesAndPermissions(id))
			},
			{
				text: 'Delete',
				icon: <IconDelete />,
				onAction: (id: string) => onAction(id, Route.Security.Endpoints.Groups.delete(id))
			}
		]
	}, [])

	const onCreate = useCallback(() => {
		navigate(Route.Security.Endpoints.Groups.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])
    
	return (
		<DefaultLayout title={'Endpoints / Group / List'}>
			<DynamicLoad data={data}>
				<DataGrid
					headers={headers}
					content={content}
					actions={actions}
				>
					<Grid container alignItems={'center'} justifyContent={'flex-end'}>
						<Grid item>
							<Button variant={'contained'} color={'primary'} onClick={onCreate}>CREATE GROUP</Button>
						</Grid>
					</Grid>
				</DataGrid>
			</DynamicLoad>
			
		</DefaultLayout>
	)
}

export default List