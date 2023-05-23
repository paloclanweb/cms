import {
	type FC, 
	type ReactElement, 
	type ChangeEvent, 
	type DragEvent,
	useEffect,
	useCallback, 
	useMemo, 
	useState
} from 'react'
import { useLocation, useNavigate, useLoaderData, useParams } from 'react-router-dom'
import { Route } from '@/constant'
import { DefaultLayout, DynamicLoad, MultiSelectModal, type ListItem } from '@/components'
import { useDnd, useToast } from '@/hooks'
import type { CompaniesList } from '@/types'
import { AddressExchangeService } from '@/service'

const Companies: FC = (): ReactElement => {
	const toast = useToast()
	const params = useParams()
	const data = useLoaderData() as CompaniesList
	const navigate = useNavigate()
	const { state } = useLocation()
	const [activeListIndex, setActiveListIndex] = useState<0 | 1>(0)
	const [list, setList] = useState<CompaniesList>({
		Companies: [],
		CompanyGroups: []
	})

	const { 
		onChangeState, 
		onCheck, 
		renderList, 
		renderSelectedList,
		onDragStart,
		onDropItem,
	} = useDnd()
    

	const filters = useMemo(() => {
		return [
			{
				label: 'Companies',
				onClick: () => {
					setActiveListIndex(0)
				}
			},
			{
				label: 'Company Groups',
				onClick: () => {
					setActiveListIndex(1)
				}
			},
		]
	}, [])

	const onClose = useCallback(() => {
		navigate(Route.Definitions.AddressExchange.Company.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const onChange = useCallback((event: ChangeEvent<HTMLInputElement>, item: ListItem): void => {
		if(item.type === 'Company') {
			return setList({
				...list,
				Companies: onCheck(event, list.Companies, item)
			})
		}

		setList({
			...list,
			CompanyGroups: onCheck(event, list.CompanyGroups, item)
		})
	}, [list])

	const onAdd = useCallback(() => {
		setList({
			Companies: onChangeState(list.Companies, false),
			CompanyGroups: onChangeState(list.CompanyGroups, false),
		})
	}, [list])

	const onRemove = useCallback(() => {
		setList({
			Companies: onChangeState(list.Companies, true),
			CompanyGroups: onChangeState(list.CompanyGroups, true),
		})
	}, [list])

	const onDrop = useCallback((event: DragEvent, isSelected: boolean) => {
		event.preventDefault()
		const value = event.dataTransfer.getData('text/plain')
		const item: ListItem = JSON.parse(value)

		return setList({
			CompanyGroups: item.type === 'Company Group' ? onDropItem(list.CompanyGroups, item, isSelected) : list.CompanyGroups,
			Companies: item.type === 'Company' ? onDropItem(list.Companies, item, isSelected): list.Companies
		})
	}, [list])

	const renderedList = useMemo(() => {
		if(activeListIndex === 1) {
			return renderList(list.Companies)
		}

		return renderList(list.CompanyGroups)
	}, [activeListIndex, list])

	const renderedSelectedList = useMemo(() => {
		return renderSelectedList([...list.CompanyGroups, ...list.Companies])
	}, [list])

	const onSave = useCallback(async (): Promise<void> => {
		if(!params.id) {
			return onClose()
		}

		const Service = new AddressExchangeService()

		const selectedCompanies = list.Companies.filter(company => company.isSelected).map(company => company.value)
		const selectedCompanyGroups = list.CompanyGroups.filter(companyGroup => companyGroup.isSelected).map(companyGroup => companyGroup.value)
		const response = await Service.setAssignedCompaniesAndGroups(params.id, selectedCompanies, selectedCompanyGroups)

		onClose()

		if(!response) {
			return toast({
				message: 'Something went wrong, please try again later.',
				status: 'error'
			})
		}

		toast({
			message: 'Companies and Company Groups assign updated successful!y!',
			status: 'success'
		})

	}, [list, params, state])

	useEffect(() => {
		if(data) {
			setList(data)
		}
	}, [data])

	return (
		<DefaultLayout title={'Address Exchange / Company / Companies'}>
			<DynamicLoad data={data}>
				<MultiSelectModal
					selectedTitle={'Assigned Partnerships'}
					tip={'Tip: Drag and drop Companies and Company Groups to change assignments.'}
					searchLabel={'Search'}
					filters={filters}
					list={renderedList}
					selected={renderedSelectedList}
					title={state?.data?.company?.label || ''}
					open
					onClose={onClose}
					onSave={onSave}
					onChange={onChange}
					onAdd={onAdd}
					onRemove={onRemove}
					onDragStart={onDragStart}
					onDrop={onDrop}
				/>
			</DynamicLoad>
		</DefaultLayout>
	)
}

export default Companies