import { type FC, type ReactElement, useMemo, useCallback } from 'react'
import { useLoaderData, useNavigate, useLocation } from 'react-router-dom'
import { Route } from '@/constant'
import { useToast } from '@/hooks'
import { DefaultLayout, DynamicLoad, DataGrid, Grid, Button, IconEdit, IconReset } from '@/components'
import { type AddressExchangeGroupModel } from '@/service'

const List: FC = (): ReactElement => {
	const toast = useToast()
	const data = useLoaderData() as Array<AddressExchangeGroupModel>
	const navigate = useNavigate()
	const { state } = useLocation()

	const headers = useMemo(() => [
		{
			field: 'Name',
			headerName: 'Partner Group Name',
		},
		{
			field: 'Count',
			headerName: 'Companies',
		},
	], [])

	const onAction = useCallback((id: string, route: string) => {
		const item = data.find(item => item.Id === id)

		if(!item) {
			return toast({
				message: 'Address Exchange Group not found',
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
				text: 'Edit Partner Group',
				icon: <IconEdit/>,
				onAction: (id: string) => onAction(id, Route.Definitions.AddressExchange.CompanyGroup.companies(id))
			},
			{
				text: 'Reset',
				icon: <IconReset/>,
				onAction: (id: string) => {
					// todo: reset
				}
			}
		]
	}, [])

	const content = useMemo(() => {
		return [...data.map(item => ({
			Id: item.Id,
			Name: item.Name,
			Count: item.Count
		}))]
	}, [data])

	const onCreate = useCallback(() => {
		navigate(Route.Definitions.AddressExchange.CompanyGroup.create, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])
    
	return (
		<DefaultLayout title={'Address Exchange / Groups / List'}>
			<DynamicLoad data={data}>
				<DataGrid
					headers={headers}
					content={content}
					actions={actions}
				>
					<Grid container alignItems={'center'} justifyContent={'flex-end'}>
						<Grid item>
							<Button variant={'contained'} color={'primary'} onClick={onCreate}>CREATE COMPANY GROUP</Button>
						</Grid>
					</Grid>
				</DataGrid>
			</DynamicLoad>
		</DefaultLayout>
		
	)
}

export default List