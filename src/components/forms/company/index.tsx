import {type FC, type ReactElement, type FormEvent, useEffect, useMemo, useState, useCallback} from 'react'
import { useLocation } from 'react-router-dom'
import type { CompanyDTO } from '@/service'
import {Grid, Button, Input, Select, PasswordInput, Box } from '@/components'
import { Tip } from '@/assets/styles'
import type { FormProps } from '@/types'

type Props = FormProps<CompanyDTO>

const initialData: CompanyDTO = {
	CompanyType: 1,
	OwnershipType: 1,
	Email: '',
	Phone: '',
	FirstName: '',
	LastName: '',
	VatNumber: '',
	RegisteredCompanyName: '',
	Password: '',
	Password2: ''
}

const Form: FC<Props> = ({
	onSubmit,
	onClose
}: Props): ReactElement => {
	const { state } = useLocation()
	const [data, setData] = useState<CompanyDTO>(initialData)
	const [step, setStep] = useState<number>(1)

	const onCloseHandler = useCallback(() => {
		if(step === 1) {
			return onClose()
		}

		setStep(1)
	}, [onClose, step])

	const onSubmitHandler = useCallback((event: FormEvent) => {
		event.preventDefault()

		if(step === 1) {
			return setStep(2)
		}

		onSubmit(data)
	}, [step, data])

	const companies = useMemo(() => [
		{
			label: 'Limited Company',
			value: 1
		},
		{
			label: 'Incorporated Company',
			value: 2
		},
		{
			label: 'Individiual Company',
			value: 3
		}
	], [])

	const ownerships = useMemo(() => [
		{
			label: 'Cargo Owner',
			value: 2
		},
		{
			label: 'Transporter Owner',
			value: 1
		}
	], [])

	useEffect(() => {
		if(!state?.data) {
			return
		}

		setData(state.data)
	}, [state])

	const Company = useMemo(() => {
		return (
			<>
				<Select
					required
					id={'company'}
					value={data.CompanyType}
					label={'Company Type'}
					options={companies}
					onChange={(option) => setData({
						...data,
						CompanyType: option.value
					})}
					sx={{
						marginBottom: '2rem'
					}}
				/>
				
				<Select
					required
					id={'ownership'}
					value={data.OwnershipType}
					label={'Type of Ownership'}
					options={ownerships}
					onChange={(option) => setData({
						...data,
						OwnershipType: option.value
					})}
					sx={{
						marginBottom: '2rem'
					}}
				/>

				<Input
					required
					type={'text'}
					label={'Registered Company Name'}
					fullWidth
					value={data.RegisteredCompanyName}
					onChange={event => setData({...data, RegisteredCompanyName: event.currentTarget.value})}
					sx={{
						marginBottom: '2rem'
					}}
				/>

				<Input
					required
					type={'text'}
					label={'VAT Number'}
					fullWidth
					value={data.VatNumber}
					onChange={event => setData({...data, VatNumber: event.currentTarget.value})}
					sx={{
						marginBottom: '2rem'
					}}
				/>

				<Input
					required
					type={'email'}
					label={'Company E-mail'}
					fullWidth
					value={data.Email}
					onChange={event => setData({...data, Email: event.currentTarget.value})}
					sx={{
						marginBottom: '2rem'
					}}
				/>

				<Input
					required
					type={'text'}
					label={'Phone Number'}
					fullWidth
					value={data.Phone}
					onChange={event => setData({...data, Phone: event.currentTarget.value})}
					sx={{
						marginBottom: '2rem'
					}}
				/>
			</>
		)
	}, [data])

	const stepTip = useMemo(() => {
		if(step === 1) {
			return 'Step 1/2: Enter your company details'
		}

		return 'Step 2/2: Add first user for your company'
	}, [step])

	const User = useMemo(() => {
		return (
			<>
				<Input
					fullWidth
					required
					value={data.FirstName}
					label={'Name'}
					onChange={(option) => setData({
						...data,
						FirstName: option.value
					})}
					sx={{
						marginBottom: '2rem'
					}}
				/>

				<Input
					fullWidth
					required
					value={data.LastName}
					label={'Surname'}
					onChange={(option) => setData({
						...data,
						LastName: option.value
					})}
					sx={{
						marginBottom: '2rem'
					}}
				/>

				<PasswordInput
					required
					type={'text'}
					label={'Password'}
					fullWidth
					value={data.Password}
					onChange={event => setData({...data, Password: event.currentTarget.value})}
					sx={{
						marginBottom: '2rem'
					}}
				/>

				<PasswordInput
					required
					type={'text'}
					label={'Password Confirmation'}
					fullWidth
					value={data.Password2}
					onChange={event => setData({...data, Password2: event.currentTarget.value})}
					sx={{
						marginBottom: '2rem'
					}}
				/>
			</>
		)
	}, [data])

	const buttons = useMemo(() => {
		return (
			<Grid container gap={2}>
				<Grid item xs>
					<Button type={'reset'} variant={'outlined'} color={'primary'} fullWidth onClick={onCloseHandler}>
						{step === 1 ? 'CANCEL' : 'GO BACK'}
					</Button>
				</Grid>
				<Grid item xs>
					<Button type={'submit'} variant={'contained'} color={'primary'} fullWidth>
						{step === 1 ? 'NEXT STEP' : 'SAVE CHANGES'}
					</Button>
				</Grid>
			</Grid>
		)
	}, [step])

	return (
		<Box component={'form'} onSubmit={onSubmitHandler} sx={{
			padding: '2rem 3.2rem'
		}}>
			<Tip>{stepTip}</Tip>
			{step === 1 ? Company : User}
			{buttons}
		</Box>
	)
}

export default Form