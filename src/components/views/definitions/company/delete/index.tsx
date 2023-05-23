import { type FC, type ReactElement, useCallback } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { Route } from '@/constant'
import { DefaultLayout, DangerModal } from '@/components'
import { CompanyService } from '@/service'
import { useToast } from '@/hooks'

const Delete: FC = (): ReactElement => {
	const params = useParams()
	const toast = useToast()
	const navigate = useNavigate()
	const { state } = useLocation()

	const onClose = useCallback(() => {
		navigate(Route.Definitions.Company.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const deleteUser = useCallback(async (): Promise<void> => {
		if(!params.id) {
			return
		}

		const Company = new CompanyService()
		const response = await Company.delete(params.id)

		onClose()

		if (!response) {
			return toast({
				message: 'Something went wrong',
				status: 'error',
			})
		}

		toast({
			message: 'Company deleted successfully',
			status: 'success',
		})
	}, [params])
    
	return (
		<DefaultLayout title={'Company / Delete'}>
			<DangerModal
				title={'Delete Company'}
				open
				onClose={onClose} 
				onConfirm={deleteUser}
				text={`Are you sure to delete ${state.data.RegisteredName || 'Company'} from Companies?`}
				strong={'This action cannot be undone.'}
				confirmText={'YES, DELETE'}
				closeText={'CANCEL'}
			/>
		</DefaultLayout>
		
	)
}

export default Delete