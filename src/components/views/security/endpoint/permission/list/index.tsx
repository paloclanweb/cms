import {
	type FC,
	type ReactElement,
	useMemo,
	useCallback
} from 'react'
import { Route } from '@/constant'
import { useLoaderData, useNavigate, useLocation } from 'react-router-dom'
import {
	DefaultLayout,
	DynamicLoad,
	DataGrid, 
	Grid, 
	Button, 
	IconEdit, 
	IconUsers, 
	IconUserCard, 
	IconDelete
} from '@/components'
import { useToast } from '@/hooks'
import { type EndpointModel } from '@/service'

const List: FC = (): ReactElement => {
	const toast = useToast()
	const { state } = useLocation()
	const navigate = useNavigate()
	const data = useLoaderData() as Array<EndpointModel>
	const getMethod = useCallback((method: number) => {
		switch (method) {
		case 1:
			return 'GET'
		case 2:
			return 'POST'
		case 3:
			return 'PUT'
		case 4:
			return 'DELETE'
		default:
			return 'GET'
		}
	}, [])

	const headers = useMemo(() => [
		{
			field: 'Method',
			headerName: 'Method',
		},
		{
			field: 'Path',
			headerName: 'Endpoint',
		},
		{
			field: 'Description',
			headerName: 'Description',
		},
	], [])

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

	const actions = useMemo(() => {
		return [
			{
				text: 'Edit Permission',
				icon: <IconEdit />,
				onAction: (id: string) => onAction(id, Route.Security.Endpoints.Permissions.update(id))
			},
			{
				text: 'Groups',
				icon: <IconUsers width={24} height={24} fill={'#A3AAB8'} />,
				onAction: (id: string) => onAction(id, Route.Security.Endpoints.Permissions.groups(id))
			},
			{
				text: 'Roles and Permissions',
				icon: <IconUserCard />,
				onAction: (id: string) => onAction(id, Route.Security.Endpoints.Permissions.rolesAndPermissions(id))
			},
			{
				text: 'Delete',
				icon: <IconDelete />,
				onAction: (id: string) => onAction(id, Route.Security.Endpoints.Permissions.delete(id))
			}
		]
	}, [state])

	const content = useMemo(() => {
		return [...data.map(item => {
			return {
				Id: item.Id,
				Method: getMethod(item.Method),
				Path: item.Path,
				Description: item.Description,
			}
		})]
	}, [data])

	const onCreate = useCallback(() => {
		navigate(Route.Security.Endpoints.Permissions.create, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	return (
		<DefaultLayout title={'Endpoint / Permission / List'}>
			<DynamicLoad data={data}>
				<DataGrid
					headers={headers}
					content={content}
					actions={actions}
				>
					<Grid container alignItems={'center'} justifyContent={'flex-end'}>
						<Grid item>
							<Button variant={'contained'} color={'primary'} onClick={onCreate}>CREATE PERMISSION</Button>
						</Grid>
					</Grid>
				</DataGrid>
			</DynamicLoad>
		</DefaultLayout>
	)
}

export default List