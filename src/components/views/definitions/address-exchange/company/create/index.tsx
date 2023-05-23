import { type FC, type ReactElement, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Route } from '@/constant'
import { DefaultLayout, FormModal, AddressExchangeCompanyForm } from '@/components'

const Create: FC = (): ReactElement => {
	const { state } = useLocation()
	const navigate = useNavigate()

	const onClose = useCallback(() => {
		navigate(Route.Definitions.AddressExchange.Company.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])
    
	return (
		<DefaultLayout title={'Address Exchange / Company / Create'}>
			<FormModal open onClose={onClose} title={'Add New Partnership'}>
				<AddressExchangeCompanyForm />
			</FormModal>
		</DefaultLayout>
	)
}

export default Create