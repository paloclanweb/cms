import {type FC, type ReactElement, type FormEvent, type ChangeEvent, useState, useCallback, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { Route } from '@/constant'
import { type DynamicMenuDTO } from '@/service'
import {Button, Grid, Box, Input } from '@/components'
import {FormProps} from "@/types";

const initialValue: DynamicMenuDTO = {
	AppId: null,
	Caption: '',
	Identifier: '',
	ParentId: null,
	Order: 0,
	Route: ''
}

type Props = FormProps<DynamicMenuDTO>

const Form: FC<Props> = ({ onClose, onSubmit }: Props): ReactElement => {
	const [data, setData] = useState<DynamicMenuDTO>(initialValue)
	const { state } = useLocation()

	const onSubmitHandler = useCallback(async (event: FormEvent): Promise<void> => {
		event.preventDefault()

		onSubmit(data)
	}, [state, data])

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
				required
				label={'Dynamic Menu Name'} 
				fullWidth 
				variant={'outlined'} 
				color={'primary'}
				value={data.Caption}
				onChange={(event: ChangeEvent<HTMLInputElement>) => setData({
					...data,
					Caption: event.currentTarget.value
				})}
				sx={{
					marginBottom: '2rem'
				}}
			/>

			<Input
				required
				label={'Identifier'}
				fullWidth
				variant={'outlined'}
				color={'primary'}
				value={data.Identifier}
				onChange={(event: ChangeEvent<HTMLInputElement>) => setData({
					...data,
					Identifier: event.currentTarget.value
				})}
				sx={{
					marginBottom: '2rem'
				}}
			/>

			<Input
				required
				label={'Route'}
				fullWidth
				variant={'outlined'}
				color={'primary'}
				value={data.Route}
				onChange={(event: ChangeEvent<HTMLInputElement>) => setData({
					...data,
					Route: event.currentTarget.value
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