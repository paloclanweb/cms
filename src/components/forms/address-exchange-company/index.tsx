import { type FC, type ReactElement, type FormEvent, useState, useCallback, useEffect } from 'react'
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom'
import { Route } from '@/constant'
import { Box, Grid, Button, Select } from '@/components'
import { Tip } from '@/assets/styles'
import type { CompanionShipModel } from '@/service'

type Option = {
	value: string
	label: string
}

const Form: FC = (): ReactElement => {
	const companies = useLoaderData() as Array<CompanionShipModel>
	const navigate = useNavigate()
	const { state } = useLocation()
	const [selectedCompany, setSelectedCompany] = useState<Option>({
		label: '',
		value: ''
	})

	const onClose = useCallback(() => {
		navigate(Route.Definitions.AddressExchange.Company.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const onSubmitHandler = useCallback((event: FormEvent) => {
		event.preventDefault()
		navigate(Route.Definitions.AddressExchange.Company.companies(selectedCompany.value), {
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
		if(!companies) {
			return
		}

		if(companies.length === 0) {
			return
		}

		const company = companies.filter(company => company.RegisteredCompanyName)

		if(company.length === 0) {
			return
		}
			
		setSelectedCompany({
			label: company[0].RegisteredCompanyName as string,
			value: company[0].Id
		})
	}, [companies])

	return (
		<Box component={'form'} onSubmit={onSubmitHandler} sx={{
			padding: '2rem 3.2rem',
		}}>
			<Tip>Select a Company to assign Partnerships</Tip>
			<Select
				fullWidth
				label={'Select Company'}
				options={companies?.filter(company => company.RegisteredCompanyName).map(company => ({
					label: company.RegisteredCompanyName as string,
					value: company.Id
				}))}
				value={selectedCompany.value}
				onChange={option => setSelectedCompany(option)}
				sx={{
					marginBottom: '2rem'
				}}
			/>
			<Grid container alignItems={'center'} justifyContent={'flex-end'} columnGap={'1.2rem'}>
				<Grid item>
					<Button type={'button'} variant={'outlined'} color={'primary'} onClick={onClose}>CANCEL</Button>
				</Grid>
				<Grid item>
					<Button type={'submit'} variant={'contained'} color={'primary'}>NEXT STEP</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Form