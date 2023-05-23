import { type FC, type ReactElement, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Route } from '@/constant'
import { CreateAction, AddressExchangeGroupForm } from '@/components'
import { type AddressExchangeGroupDTO, AddressExchangeGroupService } from '@/service'
import { useToast } from '@/hooks'

const Create: FC = (): ReactElement => {
	const { state } = useLocation()
	const navigate = useNavigate()
	const toast = useToast()

	const onClose = useCallback(() => {
		navigate(Route.Definitions.AddressExchange.CompanyGroup.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const onCreate = useCallback(async (data: AddressExchangeGroupDTO) => {
		const AddressExchangeGroup = new AddressExchangeGroupService()

		const response = await AddressExchangeGroup.create(data)

		if(!response) {
			return toast({
				message: 'Something went wrong',
				status: 'error',
			})
		}

		onClose()

		return toast({
			message: 'Admin user created successfully',
			status: 'success',
		})
	}, [])

	return (
		<CreateAction
			breadcrumb={'Address Exchange / Groups / Create'}
			onClose={onClose}
			title={'Add New Company'}
			width={'42.4rem'}
			onCreate={onCreate}
			Form={AddressExchangeGroupForm}
		/>
	)
}

export default Create