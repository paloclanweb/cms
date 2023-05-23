import {type FC, type ReactElement, type FormEvent, useEffect, useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import type { FormProps } from '@/types'
import type { PermissionDTO } from '@/service'
import { Grid, Button, Input, Box } from '@/components'

type Props = FormProps<PermissionDTO>

const initialData: PermissionDTO = {
	Name: '',
	Description: ''
}

const Form: FC<Props> = ({ onClose, onSubmit }: Props): ReactElement => {
	const { state } = useLocation()
	const [data, setData] = useState<PermissionDTO>(initialData)
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
		<Box component={'form'} onSubmit={onSubmitHandler} sx={{
			padding: '2rem 3.2rem',
		}}>
			<Input
				type={'text'}
				fullWidth
				variant={'outlined'}
				color={'primary'}
				label={'Name'}
				value={data.Name}
				onChange={event => setData({...data, Name: event.currentTarget.value})}
				sx={{
					marginBottom: '2rem',
				}}
			/>
			<Input
				type={'text'}
				fullWidth
				variant={'outlined'}
				color={'primary'}
				label={'Description'}
				value={data.Description}
				onChange={event => setData({...data, Description: event.currentTarget.value})}
				sx={{
					marginBottom: '2rem',
				}}
			/>
			<Input
				type={'text'}
				fullWidth
				variant={'outlined'}
				color={'primary'}
				label={'Value'}
				value={data.Value}
				onChange={event => setData({...data, Value: event.currentTarget.value})}
				sx={{
					marginBottom: '2rem',
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