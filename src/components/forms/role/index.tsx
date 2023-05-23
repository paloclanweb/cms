import {type FC, type ReactElement, type FormEvent, useState, useCallback, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { Button, Grid, Input, Box } from '@/components'
import type { RoleDTO } from '@/service'
import type { FormProps } from '@/types'
import { Validation } from '@/helpers'
import { useToast } from '@/hooks'

type Props = FormProps<RoleDTO>

const initialData: RoleDTO = {
	Name: '',
	Description: '',
	RoleGroup: 0,
}

const Form: FC<Props> = ({ onClose, onSubmit }: Props): ReactElement => {
	const { state } = useLocation()
	const toast = useToast()
	const [data, setData] = useState<RoleDTO>(initialData)
	const onSubmitHandler = useCallback(async (event: FormEvent): Promise<void> => {
		event.preventDefault()
		const FormValidation = new Validation()

		try {
			await FormValidation.number(data.RoleGroup)
		} catch (error) {
			return toast({
				message: error as string,
				status: 'error'
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
		<Box component={'form'} onSubmit={onSubmitHandler} sx={{
			padding: '2rem 3.2rem'
		}}>
			<Input
				type={'text'}
				fullWidth
				variant={'outlined'}
				color={'primary'}
				label={'Role Name'}
				value={data.Name}
				onChange={event => setData({...data, Name: event.currentTarget.value})}
				sx={{
					marginBottom: '2rem'
				}}
			/>
			<Input
				type={'text'}
				fullWidth
				variant={'outlined'}
				color={'primary'}
				label={'Role Description'}
				value={data.Description}
				onChange={event => setData({...data, Description: event.currentTarget.value})}
				sx={{
					marginBottom: '2rem'
				}}
			/>
			<Input
				type={'number'}
				fullWidth
				variant={'outlined'}
				color={'primary'}
				label={'Role Group'}
				value={data.RoleGroup}
				onChange={event => setData({...data, RoleGroup: +event.currentTarget.value})}
				sx={{
					marginBottom: '2rem'
				}}
			/>
			<Grid container spacing={3}>
				<Grid item xs>
					<Button type={'reset'} variant={'outlined'} color={'primary'} fullWidth
						onClick={onClose}>CANCEL</Button>
				</Grid>
				<Grid item xs>
					<Button type={'submit'} variant={'contained'} color={'primary'} fullWidth>SAVE CHANGES</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Form