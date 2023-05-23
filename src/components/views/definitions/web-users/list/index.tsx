import { type FC, type ReactElement, useMemo, useCallback } from 'react'
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom'
import { Route } from '@/constant'
import { Parser } from '@/helpers'
import { useToast } from '@/hooks'
import { DynamicLoad, DataGrid, IconLogin, IconDelete, DefaultLayout } from '@/components'
// import { Badge } from '@/assets/styles'
import { type WebUserModel, CompanyService } from '@/service'

const List: FC = (): ReactElement => {
	const toast = useToast()
	const { state } = useLocation()
	const navigate = useNavigate()
	const data = useLoaderData() as WebUserModel
	const headers = useMemo(() => [
		{
			field: 'FullName',
			headerName: 'Name',
		},
		{
			field: 'Email',
			headerName: 'E-Mail',
		},
		{
			field: 'PhoneNumber',
			headerName: 'Phone',
		},
		{
			field: 'UserType',
			headerName: 'User Type',
		},
		{
			field: 'CompanyName',
			headerName: 'Company Name',
		},
		{
			field: 'LastLogin',
			headerName: 'Last Login',
		},
		// {
		// 	field: 'Status',
		// 	headerName: 'Status',
		// },
	], [])

	const content = useMemo(() => {
		const Parse  = new Parser()
		return [...data.Rows.map(item => ({
			Id: item.Id,
			FullName: item.FullName,
			Email: item.Email,
			PhoneNumber: item.PhoneNumber,
			UserType: item.IsCO ? 'CO' : item.IsTO ? 'TO' : item.IsDriver ? 'Driver' : '',
			CompanyName: item.CompanyName,
			LastLogin: Parse.date(item.LastLoginAt),
			// Status: <Badge active={item.IsActive ? 1 : 0}>{item.IsActive ? 'Active' : 'InActive'}</Badge>
		}))]
	}, [data])

	const onAction = useCallback((id: string, route: string) => {
		const item = data.Rows.find(item => item.Id === id)

		if(!item) {
			return toast({
				message: 'User not found',
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

	const loginAs = useCallback(async (id: string): Promise<void> => {
		const item = data.Rows.find(item => item.Id === id)

		if(!item || !window) {
			return toast({
				message: 'Something went wrong',
				status: 'error'
			})
		}

		const Service = new CompanyService()

		if(!item.Email || !item.Id) {
			return
		}

		const response = await Service.login({
			Email: item.Email,
			UserId: item.Id
		})

		if(!response) {
			return toast({
				message: 'Something went wrong',
				status: 'error'
			})
		}

		return window.location.assign('https://lp-web-test-app.logipoly.com/' + response.HashValue)
	}, [window, data])

	const actions = useMemo(() => {
		return [
			{
				icon: <IconLogin />,
				text: 'Login As',
				onAction: (id: string) => loginAs(id)
			},
			{
				icon: <IconDelete />,
				text: 'Delete',
				onAction: (id: string) => onAction(id, Route.Definitions.WebUser.delete(id))
			}
		]
	}, [state])

	return (
		<DefaultLayout title={'Web User / List'}>
			<DynamicLoad data={data}>
				<DataGrid
					headers={headers}
					content={content}
					actions={actions}
				/>
			</DynamicLoad>
		</DefaultLayout>
	)
}

export default List