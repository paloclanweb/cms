import { type FC, type ReactElement, useMemo, useCallback } from 'react'
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom'
import { Route } from '@/constant'
import { useToast } from '@/hooks'
import { DefaultLayout, DataGrid, Grid, Button, IconEdit, IconUserCard, IconDelete, DynamicLoad } from '@/components'
// import { Badge } from '@/assets/styles'
import { RoleModel } from '@/service'

const List: FC = (): ReactElement => {
	const toast = useToast()
	const data = useLoaderData() as Array<RoleModel>
	const navigate = useNavigate()
	const { state } = useLocation()

	const headers = useMemo(() => [
		{
			field: 'Name',
			headerName: 'Name'
		},
		{
			field: 'Description',
			headerName: 'Description'
		},
		{
			field: 'RoleGroup',
			headerName: 'Group'
		},
		// {
		// 	field: 'Status',
		// 	headerName: 'Status'
		// }
	], [])

	const content = useMemo(() => {
		return [...data.map(item => ({
			Id: item.Id,
			Name: item.Name,
			Description: item.Description,
			RoleGroup: item.RoleGroup,
			// Status: <Badge active={item.IsActive ? 1 : 0}>{item.IsActive ? 'Active' : 'InActive'}</Badge>
		}))]
	}, [data])

	const onAction = useCallback((id: string, route: string) => {
		const item = data.find(item => item.Id === id)

		if(!item) {
			return toast({
				message: 'Role not found',
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

	const actions = useMemo(() => [
		{
			text: 'Edit Role',
			icon: <IconEdit />,
			onAction: (id: string) => onAction(id, Route.Security.Web.Roles.update(id))
		},
		{
			text: 'Permissions',
			icon: <IconUserCard />,
			onAction: (id: string) => onAction(id, Route.Security.Web.Roles.permissions(id))
		},
		{
			text: 'Delete',
			icon: <IconDelete />,
			onAction: (id: string) => onAction(id, Route.Security.Web.Roles.delete(id))
		}
	], [])

	const onCreate = useCallback(() => {
		navigate(Route.Security.Web.Roles.create, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])
    
	return (
		<DefaultLayout title={'Web / Role / List'}>
			<DynamicLoad data={data}>
				<DataGrid
					headers={headers}
					content={content}
					actions={actions}
				>
					<Grid container justifyContent={'flex-end'}>
						<Grid item>
							<Button
								variant={'contained'}
								color={'primary'}
								onClick={onCreate}
							>ADD NEW ROLE</Button>
						</Grid>
					</Grid>
				</DataGrid>
			</DynamicLoad>
		</DefaultLayout>
		
	)
}

export default List