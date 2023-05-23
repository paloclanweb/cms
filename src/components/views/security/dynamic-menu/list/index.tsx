import { type FC, type ReactElement, useMemo, useCallback } from 'react'
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom'
import { Route } from '@/constant'
import { useToast } from '@/hooks'
import { DefaultLayout, DynamicLoad, DataGrid, IconEdit, IconDelete, Grid, Button } from '@/components'
import { DynamicMenuModel } from '@/service'

const List: FC = (): ReactElement => {
	const toast = useToast()
	const data = useLoaderData() as Array<DynamicMenuModel>
	const navigate = useNavigate()
	const { state } = useLocation()

	const headers = useMemo(() => [
		{
			field: 'Caption',
			headerName: 'Menu Name',
		},
	], [])

	const onAction = useCallback((id: string, route: string) => {
		const item = data.find(item => item.Id === id)

		if(!item) {
			return toast({
				message: 'Dynamic Menu not found',
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

	const content = useMemo(() => {
		return [...data.map(item => ({
			Id: item.Id,
			Caption: item.Caption ? item.Caption : 'N/A'
		}))]
	}, [data])

	const actions = useMemo(() => {
		return [
			{
				text: 'Edit Menu',
				icon: <IconEdit />,
				onAction: (id: string): void => onAction(id, Route.Security.DynamicMenu.update(id))
			},
			{
				text: 'Delete',
				icon: <IconDelete />,
				onAction: (id: string): void => onAction(id, Route.Security.DynamicMenu.delete(id))
			}
		]
	}, [])

	const onCreate = useCallback(() => {
		navigate(Route.Security.DynamicMenu.create, {
			state: {
				...state,
				data: null
			}
		})
	}, [state])
    
	return (
		<DefaultLayout title={'Dynamic Menu / List'}>
			<DynamicLoad data={data}>
				<DataGrid
					headers={headers}
					content={content}
					actions={actions}
				>
					<Grid container justifyContent={'flex-end'}>
						<Grid item>
							<Button variant={'contained'} color={'primary'} onClick={onCreate}>
                        		CREATE DYNAMIC MENU
							</Button>
						</Grid>
					</Grid>
				</DataGrid>
			</DynamicLoad>
		</DefaultLayout>
	)
}

export default List