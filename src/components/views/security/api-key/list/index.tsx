import { type FC, type ReactElement, useMemo, useCallback } from 'react'
import { useNavigate, useLoaderData, useLocation } from 'react-router-dom'
import { Route } from '@/constant'
import {
	DefaultLayout,
	DynamicLoad,
	DataGrid,
	IconDelete,
	Grid,
	Button,
	IconCopy,
	Box,
} from '@/components'
import { Parser, isPastDate } from '@/helpers'
import { useToast } from '@/hooks'
import { type APIKeyModel } from '@/service'

const List: FC = (): ReactElement => {
	const toast = useToast()
	const { state } = useLocation()
	const data = useLoaderData() as Array<APIKeyModel>
	const navigate = useNavigate()

	const headers = useMemo(() => [
		{
			field: 'Description',
			headerName: 'API Definition',
		},
		{
			field: 'AccessToken',
			headerName: 'API KEY',
		},
		{
			field: 'CreatedAt',
			headerName: 'Created At',
		},
		{
			field: 'ExpirationAt',
			headerName: 'Expired At',
		},
	], [])
    
	const content = useMemo(() => {
		const Parse = new Parser()

		return [...data.map(item => {
			return {
				...item,
				Description: <Box sx={{
					...(isPastDate(item.ExpirationAt) && ({
						opacity: 0.5
					})),
				}}>{item.Description}</Box>,
				AccessToken: <Box sx={{
					...(isPastDate(item.ExpirationAt) && ({
						opacity: 0.5
					})),
				}}>{item.AccessToken}</Box>,
				CreatedAt: <Box sx={{
					...(isPastDate(item.ExpirationAt) && ({
						opacity: 0.5
					})),
				}}>{Parse.date(item.CreatedAt)}</Box>,
				ExpirationAt: <Box sx={{
					...(isPastDate(item.ExpirationAt) && ({
						opacity: 0.5
					})),
				}}>{Parse.date(item.ExpirationAt)}</Box>,
			}
		})]
	}, [data])

	const onAction = useCallback((id: string, route: string) => {
		const item = data.find(item => item.Id === id)

		if(!item) {
			return toast({
				message: 'API Key not found',
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
			icon: <IconCopy />,
			text: 'Copy API Key',
			onAction: (id: string) => {
				// todo: copy
			}
		},
		{
			icon: <IconDelete />,
			text: 'Delete',
			onAction: (id: string) => onAction(id, Route.Security.ApiKeys.delete(id))
		}
	], [])

	const onCreate = useCallback(() => {
		navigate(Route.Security.ApiKeys.create, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])
    
	return (
		<DefaultLayout title={'API Key / List'}>
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
							>ADD NEW KEY</Button>
						</Grid>
					</Grid>
				</DataGrid>
			</DynamicLoad>
		</DefaultLayout>
	)
}

export default List