import { type FC, type ReactElement, useMemo, useCallback } from 'react'
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom'
import { Route } from '@/constant'
import { useToast } from '@/hooks'
import { DefaultLayout, DynamicLoad, DataGrid, Grid, Button, IconEdit, IconReset } from '@/components'
import { AddressExchangeModel } from '@/service'


const List: FC = (): ReactElement => {
	const toast = useToast()
	const data = useLoaderData() as Array<AddressExchangeModel>
	const navigate = useNavigate()
	const { state } = useLocation()

	const headers = useMemo(() => [
		{
			field: 'Name',
			headerName: 'Registered Company Name',
		},
		{
			field: 'Addresses',
			headerName: 'Adresses',
		},
	], [])

	const onAction = useCallback((id: string, route: string) => {
		const item = data.find(item => item.Id === id)

		if(!item) {
			return toast({
				message: 'Address Exchange Company not found',
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
	            text: 'Edit Partnerships',
	            icon: <IconEdit/>,
				onAction: (id: string) => onAction(id, Route.Definitions.AddressExchange.Company.companies(id))
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
			Addresses: `${item.Count.Groups} Company Group, ${item.Count.Companies} Companies`,
		}))]
	}, [data])

	const onCreate = useCallback(() => {
		navigate(Route.Definitions.AddressExchange.Company.create, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	return (
		<DefaultLayout title={'Address Exchange / Company / List'}>
			<DynamicLoad data={data}>
				<DataGrid
					headers={headers}
					content={content}
					actions={actions}
				>
					<Grid container alignItems={'center'} justifyContent={'flex-end'}>
						<Grid item>
							<Button variant={'contained'} color={'primary'} onClick={onCreate}>ADD NEW PARTNERSHIP</Button>
						</Grid>
					</Grid>
				</DataGrid>
			</DynamicLoad>
		</DefaultLayout>
	)
}

export default List