import {type FC, type ReactElement, type FormEvent, useEffect, useState, useCallback} from 'react'
import { useLocation } from 'react-router-dom'
import type { FormProps } from '@/types'
import type { EndpointGroupDTO } from '@/service'
import {Grid, Button, Box, Input } from '@/components'

type Props = FormProps<EndpointGroupDTO>

const initialData: EndpointGroupDTO = {
	Name: ''
}

const Form: FC<Props> = ({
	onSubmit,
	onClose
}: Props): ReactElement => {
	const { state } = useLocation()
	const [data, setData] = useState(initialData)
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
			padding: '2rem 3.2rem'
		}}>
			<Input
				fullWidth
				color={'primary'}
				variant={'outlined'}
				required
				value={data.Name}
				label={'Group Name'}
				onChange={event => setData({
					...data,
					Name: event.currentTarget.value
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