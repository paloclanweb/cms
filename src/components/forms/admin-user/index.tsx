import {type FC, type ReactElement, type FormEvent, useEffect, useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import {Grid, Button, Input, Box, PasswordInput } from '@/components'
import { AdminDTO } from '@/service'
import { Validation } from '@/helpers'
import { useToast } from '@/hooks'
import { FormProps } from '@/types'

const initialData: AdminDTO = {
	FirstName: '',
	LastName: '',
	Description: '',
	Email: '',
	Phone: '',
	Password: '',
	PasswordAgain: ''
}

const Form: FC<FormProps<AdminDTO>> = ({
	onSubmit,
	onClose,
}): ReactElement => {
	const [data, setData] = useState<AdminDTO>(initialData)
	const { state } = useLocation()
	const toast = useToast()

	const onSubmitHandler = useCallback(async (event: FormEvent): Promise<void> => {
		const FormValidation = new Validation()
		event.preventDefault()

		try {
			await FormValidation.email(data.Email)
		} catch (error) {
			return toast({
				status: 'error',
				message: error as string
			})
		}

		try {
			await FormValidation.phone(data.Phone)
		} catch (error) {
			return toast({
				status: 'error',
				message: error as string
			})
		}

		onSubmit(data)
	}, [data])

	useEffect(() => {
		if(!state?.data) {
			return
		}

		setData(state.data)
	}, [state])

	return (
		<Box
			component={'form'} 
			onSubmit={onSubmitHandler}
			sx={{
				padding: '2.3rem 3.2rem'
			}}>
			<Input
				required
				fullWidth
				variant={'outlined'}
				color={'primary'}
				type={'text'}
				label={'Name'}
				value={data.FirstName}
				onChange={event => setData({...data, FirstName: event.currentTarget.value})}
				sx={{
					marginBottom: '2rem'
				}}
			/>
			<Input
				required
				fullWidth
				variant={'outlined'}
				color={'primary'}
				type={'text'}
				label={'Surname'}
				value={data.LastName}
				onChange={event => setData({...data, LastName: event.currentTarget.value})}
				sx={{
					marginBottom: '2rem'
				}}
			/>
			<Input
				required
				fullWidth
				variant={'outlined'}
				color={'primary'}
				type={'email'}
				label={'E-mail'}
				value={data.Email}
				onChange={event => setData({...data, Email: event.currentTarget.value})}
				sx={{
					marginBottom: '2rem'
				}}
			/>
			<Input
				required
				fullWidth
				variant={'outlined'}
				color={'primary'}
				type={'tel'}
				label={'Phone'}
				value={data.Phone}
				onChange={event => setData({...data, Phone: event.currentTarget.value})}
				sx={{
					marginBottom: '2rem'
				}}
			/>
			<Input
				required
				fullWidth
				variant={'outlined'}
				color={'primary'}
				type={'text'}
				label={'Description'}
				value={data.Description}
				onChange={event => setData({...data, Description: event.currentTarget.value})}
				sx={{
					marginBottom: '2rem'
				}}
			/>

			<PasswordInput
				required
				fullWidth
				variant={'outlined'}
				color={'primary'}
				label={'Password'}
				value={data.Password}
				onChange={event => setData({...data, Password: event.currentTarget.value})}
				sx={{
					marginBottom: '2rem'
				}}
			/>

			<PasswordInput
				required
				fullWidth
				variant={'outlined'}
				color={'primary'}
				label={'Password Again'}
				value={data.PasswordAgain}
				onChange={event => setData({...data, PasswordAgain: event.currentTarget.value})}
				sx={{
					marginBottom: '2rem'
				}}
			/>
		
			<Grid container alignItems={'center'} justifyContent={'flex-end'} columnGap={'1.2rem'}>
				<Grid item>
					<Button variant={'outlined'} color={'primary'} onClick={onClose}>CANCEL</Button>
				</Grid>
				<Grid item>
					<Button type={'submit'} variant={'contained'} color={'primary'}>SAVE CHANGES</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Form