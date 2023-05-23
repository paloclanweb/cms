import {type FC, type ReactElement, type FormEvent, useState, useEffect, useMemo, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import type { EndpointDTO } from '@/service'
import {Grid, Button, Box, Input, Select } from '@/components'
import type { FormProps } from '@/types'

type Props = FormProps<EndpointDTO>

const initialData: EndpointDTO = {
	Method: 1,
	Path: '',
	Description: ''
}

const Form: FC<Props> = ({
	onSubmit,
	onClose
}: Props): ReactElement => {
	const { state } = useLocation()
	const [data, setData] = useState<EndpointDTO>(initialData)
	const onSubmitHandler = useCallback((event: FormEvent): void => {
		event.preventDefault()
		onSubmit(data)
	}, [data])

	const methods = useMemo(() => [
		{
			label: 'GET',
			value: 1
		},
		{
			label: 'POST',
			value: 2
		},
		{
			label: 'PUT',
			value: 3
		},
		{
			label: 'DELETE',
			value: 4
		},
	], [])

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
			<Select
				required
				id={'method'}
				value={data.Method}
				label={'Method'}
				options={methods}
				onChange={(option) => setData({
					...data,
					Method: option.value
				})}
				sx={{
					marginBottom: '2rem'
				}}
			/>

			<Input
				fullWidth
				color={'primary'}
				variant={'outlined'}
				required
				value={data.Path}
				label={'Endpoint'}
				onChange={event => setData({
					...data,
					Path: event.currentTarget.value
				})}
				sx={{
					marginBottom: '2rem'
				}}
			/>
				
			<Input
				fullWidth
				color={'primary'}
				variant={'outlined'}
				required
				value={data.Description}
				label={'Endpoint Description'}
				onChange={event => setData({
					...data,
					Description: event.currentTarget.value
				})}
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