import { type FC, type ReactElement, type FormEvent, useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { type APIKeyDTO } from '@/service'
import {Button, Grid, DatePicker, Box, Input } from '@/components'
import type { FormProps } from '@/types'

type Props = FormProps<APIKeyDTO>

const initialData: APIKeyDTO = {
	Description: '',
	ExpirationAt: 0
}

const Form: FC<Props> = ({ onSubmit, onClose }: Props): ReactElement => {
	const { state } = useLocation()
	const [data, setData] = useState<APIKeyDTO>(initialData)
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
				label={'API Definition'} 
				fullWidth 
				variant={'outlined'} 
				color={'primary'} 
				value={data.Description}
				onChange={event => setData({ ...data, Description: event.currentTarget.value })}
				sx={{
					marginBottom: '2rem'
				}}
			/>
			<DatePicker />
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