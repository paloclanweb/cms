import { type FC, type ReactElement, useState, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {Content, Menu, Title, Description, ToggleButton, ActionButton, VisibleButton} from './style'
import { Route as Routes } from '@/constant'
import { DefaultLayout, Grid, Button, Search, IconPlus, IconChevron, IconVisibilityOff, IconVisibilityOn, IconMore } from '@/components'
import { DynamicMenuService, type DynamicMenuDTO } from '@/service'
import { useToast } from '@/hooks'
import { Tip } from '@/assets/styles'

const initialValue: DynamicMenuDTO = {
	AppId: '',
	Caption: '',
	Identifier: '',
	Order: 0,
	ParentId: null,
	Route: '',
	Id: ''
}

const Edit: FC = (): ReactElement => {
	const { state } = useLocation()
	const navigate = useNavigate()
	const toast = useToast()
	const [formData, setFormData] = useState<DynamicMenuDTO>(initialValue)

	const onClose = useCallback(() => {
		setFormData(initialValue)
		navigate(Routes.Security.DynamicMenu.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const redirectCreateMenu = useCallback(() => {
		if(!state?.data) {
			return
		}

		navigate(Routes.Security.DynamicMenu.create, state)
	}, [state])

	const onSubmit = useCallback(async (): Promise<void> => {
		const DynamicMenu = new DynamicMenuService()

		const response = await DynamicMenu.update(formData)

		onClose()

		if(!response) {
			return toast({
				message: 'Something went wrong',
				status: 'error',
			})
		}

		return toast({
			message: 'Dynamic menu updated successfully',
			status: 'success',
		})
	}, [formData])

	return (
		<DefaultLayout title={`Dynamic Menu / ${state.data?.Caption || 'Update'}`}>
			<Content>
				<Grid container alignItems={'center'} justifyContent={'flex-end'}>
					<Grid item xs={4}>
						<Search />
					</Grid>
					<Grid item>
						<Button
							onClick={redirectCreateMenu}
							fullWidth
							color={'primary'}
							variant={'contained'}
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between'
							}}
						>
							ADD MENU ITEM
							<IconPlus />
						</Button>
					</Grid>
				</Grid>
				<Tip>Tip: Drag and drop Menu Items to change order and relations.</Tip>
				<Menu>
					<Grid container alignItems={'center'}>
						<Grid item>
							<VisibleButton>
								<IconVisibilityOn />
							</VisibleButton>
						</Grid>
						{!state.data.ParentId && (
							<Grid item>
								<ToggleButton>
									<IconChevron
										width={24}
										height={24}
										fill={'#929AAB'}
									/>
								</ToggleButton>
							</Grid>
						)}
						<Grid item xs>
							<Grid container alignItems={'center'}>
								<Grid item>
									<Title>{state.data.Caption}</Title>
								</Grid>
								<Grid item>
									<Description>{state.data.Route}</Description>
								</Grid>
							</Grid>
						</Grid>
						<Grid item>
							<Description>{state.data.Permissions.length} Permissions</Description>
						</Grid>
						<Grid item>
							<ActionButton>
								<IconMore />
							</ActionButton>
						</Grid>
					</Grid>
				</Menu>
			</Content>
		</DefaultLayout>
	)
}

export default Edit