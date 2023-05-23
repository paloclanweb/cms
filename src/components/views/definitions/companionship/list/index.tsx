import { type FC, type ReactElement, useMemo, useCallback } from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { Route } from '@/constant'
import { useToast } from '@/hooks'
import { DefaultLayout, DynamicLoad, DataGrid, Grid, Button, IconEdit, IconReset } from '@/components'
import { CompanionShipModel } from '@/service'

const List: FC = (): ReactElement => {
	const toast = useToast()
	const data = useLoaderData() as Array<CompanionShipModel>
	const navigate = useNavigate()
	const { state } = useLocation()

	const headers = useMemo(() => [
		{
			field: 'RegisteredCompanyName',
			headerName: 'Registered Company Name',
		},
		{
			field: 'Companions',
			headerName: 'Companions',
		},
	], [])

	const content = useMemo(() => {
		return [...data.map(item => {
			return {
				Id: item.Id,
				RegisteredCompanyName: item.RegisteredCompanyName ? item.RegisteredCompanyName : 'N/A',
				Companions: `${item.Count?.Driver || 0} Drivers, ${item.Count?.TO || 0} Transporter Owners}`
			}
		})]
	}, [data])

	const onAction = useCallback((id: string, route: string) => {
		const item = data.find(item => item.Id === id)

		if(!item) {
			return toast({
				message: 'Companionship not found',
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
				text: 'Edit Companions',
				icon: <IconEdit />,
				onAction: (id: string) => onAction(id, Route.Definitions.Companionship.companions(id))
			},
			{
				text: 'Reset',
				icon: <IconReset />,
				onAction: (id: string) => {
					// todo: reset
				}
			}
		]
	}, [])

	const onCreate = useCallback(() => {
		navigate(Route.Definitions.Companionship.create, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	return (
		<DefaultLayout title={'Companionship / List'}>
			<DynamicLoad data={data}>
				<DataGrid
					headers={headers}
					content={content}
					actions={actions}
				>
					<Grid container justifyContent={'flex-end'}>
						<Grid item>
							<Button variant={'contained'} color={'primary'} onClick={onCreate}>ADD NEW COMPANIONSHIP</Button>
						</Grid>
					</Grid>
				</DataGrid>
			</DynamicLoad>
		</DefaultLayout>
	)
}

export default List