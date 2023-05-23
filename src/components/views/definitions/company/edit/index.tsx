import { type FC, type ReactElement, useState, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Route } from '@/constant'
import { DefaultLayout, FormModal, CompanyForm } from '@/components'
import { CompanyService, type CompanyDTO } from '@/service'
import { useToast } from '@/hooks'

const initialValue: CompanyDTO = {
	CompanyType: 1,
	OwnershipType: 1,
	Email: '',
	Phone: '',
	RegisteredCompanyName: '',
	VatNumber: '',
	FirstName: '',
	LastName: '',
}

const Edit: FC = (): ReactElement => {
	const toast = useToast()
	const { state } = useLocation()
	const navigate = useNavigate()
	const [formData, setFormData] = useState<CompanyDTO>(initialValue)


	const onClose = useCallback(() => {
		navigate(Route.Definitions.Company.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const onSubmit = useCallback(async () => {
		const Company = new CompanyService()

		const response = await Company.update(formData)

		onClose()

		if(!response) {
			return toast({
				message: 'Something went wrong',
				status: 'error',
			})
		}

		return toast({
			message: 'Admin user updated successfully',
			status: 'success',
		})
	}, [formData])

	// useEffect(() => {
	// 	if(state?.data) {
	// 		setFormData(state.data as CompanyDTO)
	// 	}
	// }, [state])

	return (
		<DefaultLayout title={'Company / Update'}>
			<FormModal open onClose={onClose} title={'Edit Admin User'} width={'42.4rem'}>
				<CompanyForm onClose={onClose} onSubmit={onSubmit} />
			</FormModal>
		</DefaultLayout>
	)
}

export default Edit