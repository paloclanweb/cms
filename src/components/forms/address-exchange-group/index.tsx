import { type FC, type ReactElement, type FormEvent, useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { AddressExchangeGroupDTO } from '@/service'
import {Button, Grid, Box, Input } from '@/components'
import type { FormProps } from '@/types'

type Props = FormProps<AddressExchangeGroupDTO>

const initialData: AddressExchangeGroupDTO = {
	Name: '',
	Count: 0
}

const Form: FC<Props> = ({ onSubmit, onClose }: Props): ReactElement => {
	const { state } = useLocation()
	const [data, setData] = useState<AddressExchangeGroupDTO>(initialData)
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
			padding: '1.6rem 3.2rem'
		}}>
			<Box sx={{
				marginBottom: '2rem'
			}}>
				<Input
					required
					label={'Company Group Name'} 
					fullWidth 
					variant={'outlined'} 
					color={'primary'} 
					value={data.Name}
					onChange={event => setData({ ...data, Name: event.currentTarget.value })}
					sx={{
						margin: 0
					}}
				/>
			</Box>
			
			<Grid container alignItems={'center'} justifyContent={'flex-end'} columnGap={'1.2rem'}>
				<Grid item>
					<Button variant={'outlined'} color={'primary'} onClick={onClose}>CANCEL</Button>
				</Grid>
				<Grid item>
					<Button type={'submit'} variant={'contained'} color={'primary'}>NEXT STEP</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Form