import { type FC, type ReactElement, type ChangeEvent, type DragEvent, useEffect, useState, useCallback } from 'react'
import { useLoaderData, useNavigate, useLocation, useParams } from 'react-router-dom'
import { Route } from '@/constant'
import { DefaultLayout, MultiSelectModal, type ListItem, type List } from '@/components'
import { AddressExchangeGroupService } from '@/service'
import { useDnd, useToast } from '@/hooks'

const Company: FC = (): ReactElement => {
	const toast = useToast()
	const params = useParams()
	const [list, setList] = useState<List>([])
	const { state } = useLocation()
	const navigate = useNavigate()
	const companies = useLoaderData() as List
	
	const { onDragStart, onDropItem, onChangeState, renderList, renderSelectedList, onCheck } = useDnd()

	const onClose = useCallback(() => {
		navigate(Route.Definitions.AddressExchange.CompanyGroup.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const onChange = useCallback((event: ChangeEvent<HTMLInputElement>, item: ListItem): void => {
		return setList(onCheck(event, list, item))
	}, [list])

	const onAdd = useCallback((): void => {
		setList(onChangeState(list, false))
	}, [list])

	const onRemove = useCallback((): void => {
		setList(onChangeState(list, true))
	}, [list])

	const onDrop = useCallback((event: DragEvent, isSelected: boolean) => {
		event.preventDefault()
		const value = event.dataTransfer.getData('text/plain')
		const item: ListItem = JSON.parse(value)

		return setList(onDropItem(list, item, isSelected))
	}, [list])

	const onSave = useCallback(async (): Promise<void> => {
		if(!params.id) {
			return onClose()
		}

		const selectedList = list.filter(item => item.isSelected).map(item => item.value)

		const Service = new AddressExchangeGroupService()
		const response = await Service.setCompanies(params.id, selectedList)

		onClose()

		if(!response) {
			toast({
				status: 'error',
				message: 'Something went wrong, please try again later.'
			})
		}

		toast({
			message: 'Companies updated successfully!',
			status: 'success'
		})

	}, [list, params])

	useEffect(() => {
		setList(companies)
	}, [companies])

	return (
		<DefaultLayout title={'Address Exchange / Company Group / Companies'}>
			<MultiSelectModal
				title={'Retailers'}
				tip={'Tip: Drag and drop Companies to change assignments.'}
				list={renderList(list)}
				selected={renderSelectedList(list)}
				onAdd={onAdd}
				onChange={onChange}
				onRemove={onRemove}
				onDragStart={onDragStart}
				onDrop={onDrop}
				listTitle={'All Companies'}
				selectedTitle={'Assigned Companies'}
				onClose={onClose}
				onSave={onSave}
				open
				searchLabel={'Search'}
			/>
		</DefaultLayout>
	)
}

export default Company