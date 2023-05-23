import { type FC, type ReactElement, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Route } from '@/constant'
import { CreateAction, CompanyForm } from '@/components'
import { type CompanyDTO, CompanyService } from '@/service'
import { useToast } from '@/hooks'

const Create: FC = (): ReactElement => {
	const { state } = useLocation()
	const navigate = useNavigate()
	const toast = useToast()

	const onClose = useCallback(() => {
		navigate(Route.Definitions.Company.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const onSubmit = useCallback(async (data: CompanyDTO): Promise<void> => {
		const Company = new CompanyService()

		const response = await Company.create(data)

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
			breadcrumb={'Company / Create'}
			title={'Add New Company'}
			width={'42.4rem'}
			onClose={onClose}
			onCreate={onSubmit}
			Form={CompanyForm}
		/>
	)
}

export default Create