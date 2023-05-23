import { type FC, type ReactElement, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Route } from '@/constant'
import { DynamicMenuForm, CreateAction } from '@/components'
import { DynamicMenuService, type DynamicMenuDTO } from '@/service'
import { useToast } from '@/hooks'

const Create: FC = (): ReactElement => {
	const toast = useToast()
	const navigate = useNavigate()
	const { state } = useLocation()

	const onClose = useCallback(() => {
		navigate(Route.Security.DynamicMenu.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const onCreate = useCallback(async (formData: DynamicMenuDTO): Promise<void> => {
		const DynamicMenu = new DynamicMenuService()
		const response = await DynamicMenu.create({
			Caption: formData.Caption,
			AppId: formData.AppId,
			Route: formData.Route,
			Identifier: formData.Identifier,
			ParentId: state?.data ? state.data.Id : null,
			Order: 0
		})

		if(!response) {
			return toast({
				message: 'Something went wrong',
				status: 'error',
			})
		}

		onClose()

		return toast({
			message: 'Dynamic menu created successfully',
			status: 'success',
		})
	}, [state])

	return (
		<CreateAction
			width={'42.4rem'}
			breadcrumb={'Dynamic Menu / Create'}
			title={'Create Dynamic Menu'}
			onClose={onClose}
			onCreate={onCreate}
			Form={DynamicMenuForm}
		/>
	)
}

export default Create