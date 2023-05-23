import { type FC, type ReactElement, type FormEvent, useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { type AdminDTO } from '@/service'
import {Button, Grid, Box, Input} from '@/components'
import type { FormProps } from '@/types'

const initialData: AdminDTO = {
	FirstName: '',
	LastName: '',
	Description: '',
	Email: '',
	Phone: '',
	Password: '',
	PasswordAgain: ''
}

const Form: FC<FormProps<AdminDTO>> = ({ onSubmit, onClose }: FormProps<AdminDTO>): ReactElement => {
	const { state } = useLocation()
	const [data, setData] = useState<AdminDTO>(initialData)
	const onSubmitHandler = useCallback((event: FormEvent): void => {
		event.preventDefault()
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
				label={'Password'} 
				fullWidth 
				variant={'outlined'} 
				color={'primary'} 
				value={data.Password}
				onChange={event => setData({
					...data,
					Password: event.currentTarget.value
				})}
				sx={{
					marginBottom: '2rem'
				}}
			/>
			<Input 
				required
				label={'Password Confirmation'} 
				fullWidth 
				variant={'outlined'} 
				color={'primary'} 
				value={data.PasswordAgain}
				onChange={event => setData({
					...data,
					PasswordAgain: event.currentTarget.value
				})}
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