import { type FC, type ReactElement, type FormEvent, useEffect, useState, useCallback } from 'react'
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom'
import { Route } from '@/constant'
import { Tip } from '@/assets/styles'
import { Select, Grid, Button, Box } from '@/components'
import {  type CargoOwnerModel } from '@/service'

type Option = {
	value: string
	label: string
}

const Form: FC = (): ReactElement => {
	const data = useLoaderData() as Array<CargoOwnerModel>
	const navigate = useNavigate()
	const { state } = useLocation()
	const [companies, setCompanies] = useState<Array<Option>>([])
	const [selectedCompany, setSelectedCompany] = useState<Option | null>(null)

	const onClose = useCallback(() => {
		navigate(Route.Definitions.Companionship.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const onSubmit = useCallback((event: FormEvent) => {
		event.preventDefault()
		if(!selectedCompany) {
			return
		}

		navigate(Route.Definitions.Companionship.companions(selectedCompany.value), {
			replace: true,
			state: {
				...state,
				data: {
					company: selectedCompany
				}
			}
		})
	}, [state, selectedCompany])

	useEffect(() => {
		if(!data) {
			return
		}

		const filter = data.filter(item => item.Id && item.RegisteredCompanyName).map(item => ({
			label: item.RegisteredCompanyName as string,
			value: item.Id as string
		}))

		if(filter.length === 0) {
			return
		}

		setCompanies(filter)
	}, [data])

	useEffect(() => {
		if(companies.length > 0) {
			setSelectedCompany({
				value: companies[0].value,
				label: companies[0].label
			})
		}
	}, [companies])

	return (
		<Box
			component={'form'} 
			onSubmit={onSubmit}
			sx={{
				padding: '2.3rem 3.2rem'
			}}>
			<Tip>Select a Cargo Owner to assign companions</Tip>
			{companies.length > 0 && (
				<Select
					id={'companionship'}
					label={'Select Cargo Owner'}
					value={selectedCompany?.value}
					options={companies}
					sx={{
						marginBottom: '2rem'
					}}
					onChange={option => setSelectedCompany(option)}
				/>
			)}
			<Grid container gap={2}>
				<Grid item xs>
					<Button
						type={'button'}
						fullWidth
						variant={'outlined'}
						color={'primary'} 
						onClick={onClose}
					>CANCEL</Button>
				</Grid>
				<Grid item xs>
					<Button
						type={'button'}
						onClick={onSubmit}
						fullWidth
						variant={'contained'}
						color={'primary'}
					>NEXT STEP</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Form