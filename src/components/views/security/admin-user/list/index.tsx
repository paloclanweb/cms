import { type FC, type ReactElement, useMemo, useCallback } from 'react'
import { useLoaderData, useNavigate, useLocation } from 'react-router-dom'
import { 
	DynamicLoad,
	DefaultLayout,
	DataGrid,
	Grid, 
	Button,
	IconEdit,
	IconDelete,
	IconUserCard,
	IconPassword
} from '@/components'
import { useTranslations, useToast } from '@/hooks'
import { Route } from '@/constant'
import { type AdminModel } from '@/service'
import { Parser } from '@/helpers'
// import { Badge } from '@/assets/styles'

const List: FC = (): ReactElement => {
	const { state } = useLocation()
	const toast = useToast()
	const { t } = useTranslations()
	const navigate = useNavigate()
	const data = useLoaderData() as Array<AdminModel>
	const headers = useMemo(() => [
		{
			field: 'FullName',
			headerName: t('full_name'),
		},
		{
			field: 'Email',
			headerName: t('email'),
		},
		{
			field: 'Phone',
			headerName: t('phone'),
		},
		{
			field: 'Description',
			headerName: t('description'),
		},
		{
			field: 'LastLoginAt',
			headerName: t('last_login'),
		},
		// {
		// 	field: 'Status',
		// 	headerName: 'Status',
		// },
	], [])

	const content = useMemo(() => {
		const Parse = new Parser()

		return [...data.map(item => ({
			Id: item.Id,
			FullName: `${item.FirstName} ${item.LastName}`,
			Email: item.Email,
			Phone: item.Phone,
			Description: item.Description,
			LastLoginAt: item.LastLoginAt ? Parse.date(item.LastLoginAt) : 'Never',
			// Status: <Badge active={item.IsActive ? 1 : 0} locked={item.IsLocked ? 1 : 0}>{item.IsLocked ? 'Locked': item.IsActive ? 'Active' : 'Inactive'}</Badge>,
		}))]
	}, [data])

	const onAction = useCallback((id: string, route: string) => {
		const item = data.find(item => item.Id === id)

		if(!item) {
			return toast({
				message: 'Admin User not found',
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
			text: t('edit'),
			onAction: (id: string): void => onAction(id, Route.Security.AdminUsers.update(id))
		},
		{
			icon: <IconPassword />,
			text: t('change_password'),
			onAction: (id: string): void => onAction(id, Route.Security.AdminUsers.changePassword(id))
		},
		{
			icon: <IconUserCard />,
			text: t('roles_and_permissions'),
			onAction: (id: string): void => onAction(id, Route.Security.AdminUsers.rolesAndPermissions(id))
		},
		{
			icon: <IconDelete />,
			text: t('delete'),
			onAction: (id: string): void => onAction(id, Route.Security.AdminUsers.delete(id))
		}
	], [])

	const onCreate = useCallback((): void => {
		navigate(Route.Security.AdminUsers.create, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	return (
		<DefaultLayout title={`${t('admin_user')} / ${t('list')}`}>
			<DynamicLoad data={data}>
				<DataGrid
					headers={headers}
					content={content}
					actions={actions}
				>
					<Grid container justifyContent={'flex-end'}>
						<Grid item>
							<Button variant={'contained'} color={'primary'} onClick={onCreate}>{t('add', {
								value: t('admin_user')
							})}</Button>
						</Grid>
					</Grid>
				</DataGrid>
			</DynamicLoad>
		</DefaultLayout>
	)
}

export default List