import { type FC, type ReactElement, useMemo, useCallback } from 'react'
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom'
import { Route } from '@/constant'
import { useToast } from '@/hooks'
import { DefaultLayout, DynamicLoad, DataGrid, Grid, Button, IconList, IconLogin, IconDelete, IconEdit, IconUsers } from '@/components'
import { type CompanyModel, CompanyService } from '@/service'

const List: FC = (): ReactElement => {
	const toast = useToast()
	const navigate = useNavigate()
	const { state } = useLocation()
	const data = useLoaderData() as Array<CompanyModel>

	const headers = useMemo(() => [
		{
			field: 'RegisteredName',
			headerName: 'Registered Company Name',
		},
		{
			field: 'VATNumber',
			headerName: 'VAT Number',
		},
		{
			field: 'VATOffice',
			headerName: 'Tax Office',
		},
	], [])

	const content = useMemo(() => {
		return [...data.map(item => {
			return {
				Id: item.Id,
				RegisteredName: item.RegisteredName ? item.RegisteredName : 'N/A',
				VATNumber: item.VATNumber ? item.VATNumber : 'N/A',
				VATOffice: item.VATOffice ? item.VATOffice : 'N/A',
			}
		})]
	}, [data])

	const loginAs = useCallback(async (id: string): Promise<void> => {
		const item = data.find(item => item.Id === id)

		if(!item || !window) {
			return toast({
				message: 'Something went wrong',
				status: 'error'
			})
		}

		const Service = new CompanyService()

		const response = await Service.login({
			Email: item.AdminUsers[0].Email,
			UserId: item.AdminUsers[0].Id
		})

		if(!response) {
			return toast({
				message: 'Something went wrong',
				status: 'error'
			})
		}

		return window.location.assign('https://lp-web-test-app.logipoly.com/' + response.HashValue)
	}, [window, data])

	const onAction = useCallback((id: string, route: string) => {
		const item = data.find(item => item.Id === id)

		if(!item) {
			return toast({
				message: 'Company not found',
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
				text: 'Edit Company',
				icon: <IconEdit />,
				onAction: (id: string) => onAction(id, Route.Definitions.Company.update(id))
			},
			{
				text: 'Company Details',
				icon: <IconList />,
				onAction: (id: string) => onAction(id, Route.Definitions.Company.detail(id))
			},
			{
				text: 'Users',
				icon: <IconUsers width={20} height={20} fill={'#A3AAB8'} />,
				onAction: (id: string) => onAction(id, Route.Definitions.Company.users(id))
			},
			{
				text: 'Login As',
				icon: <IconLogin />,
				onAction: async (id: string): Promise<void> => loginAs(id)
			},
			{
				text: 'Delete',
				icon: <IconDelete />,
				onAction: (id: string) => onAction(id, Route.Definitions.Company.delete(id))
			}
		]
	}, [])

	const onCreate = useCallback(() => {
		navigate(Route.Definitions.Company.create, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	return (
		<DefaultLayout title={'Company / List'}>
			<DynamicLoad data={data}>
				<DataGrid
					headers={headers}
					content={content}
					actions={actions}
				>
					<Grid container alignItems={'center'} justifyContent={'flex-end'}>
						<Grid item>
							<Button variant={'contained'} color={'primary'} onClick={onCreate}>ADD NEW COMPANY</Button>
						</Grid>
					</Grid>
				</DataGrid>
			</DynamicLoad>
		</DefaultLayout>
	)
}

export default List