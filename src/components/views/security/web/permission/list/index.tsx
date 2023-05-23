import { type FC, type ReactElement, useMemo, useCallback } from 'react'
import { useLoaderData, useNavigate, useLocation } from 'react-router-dom'
import { Route } from '@/constant'
import { useToast } from '@/hooks'
import { DefaultLayout, DynamicLoad, DataGrid, Grid, Button, IconEdit, IconDelete } from '@/components'
import { PermissionModel } from '@/service'

const List: FC = (): ReactElement => {
	const toast = useToast()
	const { state } = useLocation()
	const navigate = useNavigate()
	const data = useLoaderData() as Array<PermissionModel>
	console.log(data)
	const headers = useMemo(() => [
		{
			field: 'Name',
			headerName: 'Permission'
		},
		{
			field: 'Description',
			headerName: 'Description'
		},
		{
			field: 'Value',
			headerName: 'Value'
		}
	], [])

	const onAction = useCallback((id: string, route: string) => {
		const item = data.find(item => item.Id === id)

		if(!item) {
			return toast({
				message: 'Permission not found',
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
			icon: <IconEdit />,
			text: 'Edit Permission',
			onAction: (id: string) => onAction(id, Route.Security.Web.Permissions.update(id))
		},
		{
			icon: <IconDelete />,
			text: 'Delete',
			onAction: (id: string) => onAction(id, Route.Security.Web.Permissions.delete(id))
		}
	], [])

	const onCreate = useCallback(() => {
		navigate(Route.Security.Web.Permissions.create, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])
    
	return (
		<DefaultLayout title={'Web / Permission / List'}>
			<DynamicLoad data={data}>
				<DataGrid
					headers={headers}
					content={data}
					actions={actions}
				>
					<Grid container justifyContent={'flex-end'}>
						<Grid item>
							<Button
								variant={'contained'}
								color={'primary'}
								onClick={onCreate}
							>ADD NEW PERMISSION</Button>
						</Grid>
					</Grid>
				</DataGrid>
			</DynamicLoad>
			
		</DefaultLayout>
		
	)
}

export default List