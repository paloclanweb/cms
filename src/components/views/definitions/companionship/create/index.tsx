import { type FC, type ReactElement, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { DefaultLayout, FormModal, CompanionshipForm } from '@/components'
import { Route } from '@/constant'

const Create: FC = (): ReactElement => {
	const { state } = useLocation()
	const navigate = useNavigate()

	const onClose = useCallback(() => {
		navigate(Route.Definitions.Companionship.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	return (
		<DefaultLayout title={'Companionship / Create'}>
			<FormModal open onClose={onClose} title={'Add New Company'} width={'42.4rem'}>
				<CompanionshipForm />
			</FormModal>
		</DefaultLayout>
	)
}

export default Create