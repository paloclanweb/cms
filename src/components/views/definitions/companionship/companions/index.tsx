import {type FC, type ReactElement, type ChangeEvent, type DragEvent, useEffect, useState, useMemo, useCallback} from 'react'
import { useLoaderData, useNavigate, useLocation, useParams } from 'react-router-dom'
import { Route } from '@/constant'
import { useDnd, useToast } from '@/hooks'
import { DefaultLayout, MultiSelectModal, type ListItem } from '@/components'
import { CompanionShipService } from '@/service'
import type { CompanionList } from '@/types'

const Companions: FC = (): ReactElement => {
	const toast = useToast()
	const navigate = useNavigate()
	const params = useParams()
	const { state } = useLocation()
	const data = useLoaderData() as CompanionList

	const [list, setList] = useState<CompanionList>({
		Drivers: [],
		TransporterOwners: []
	})
	const { onChangeState, onDragStart, onDropItem, renderList, renderSelectedList, onCheck } = useDnd()
	const [activeListIndex, setActiveListIndex] = useState<number>(0)

	const onClose = useCallback(() => {
		navigate(Route.Definitions.Companionship.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const onChange = useCallback((event: ChangeEvent<HTMLInputElement>, item: ListItem): void => {
		if(item.type === 'Transporter Owner') {
			return setList({
				...list,
				TransporterOwners: onCheck(event, list.TransporterOwners, item)
			})
		}

		setList({
			...list,
			Drivers: onCheck(event, list.Drivers, item)
		})
	}, [list.TransporterOwners, list.Drivers])
    
	const filters = useMemo(() => [
		{
			label: 'Transporter Owners',
			onClick: () => {
				setActiveListIndex(0)
			}
		},
		{
			label: 'Drivers',
			onClick: () => {
				setActiveListIndex(1)
			}
		}
	], [])

	const renderedList = useMemo((): Array<ListItem> => {
		if(activeListIndex === 0) {
			return renderList(list.TransporterOwners)
		}

		return renderList(list.Drivers)
	}, [activeListIndex, list])

	const renderedSelectedList = useMemo(() => {
		return renderSelectedList([...list.TransporterOwners, ...list.Drivers])
	}, [list])

	const onSave = useCallback(async (): Promise<void> => {
		if(!params.id) {
			return onClose()
		}

		const Companionship = new CompanionShipService()

		const selectedTransporterOwners = list.TransporterOwners.filter(to => to.isSelected).map(to => ({
			Id: to.value,
			Type: 1
		}))

		const selectedDrivers = list.Drivers.filter(driver => driver.isSelected).map(driver => ({
			Id: driver.value,
			Type: 2
		}))

		const response = await Companionship.setCompanionsById(params.id, [...selectedTransporterOwners, ...selectedDrivers])

		onClose()

		if(!response) {
			return toast({
				message: 'Something went wrong, please try again later.',
				status: 'error'
			})
		}

		toast({
			message: 'Updated Drivers and Transporter Owners successfully!',
			status: 'success'
		})
	}, [params, list])

	const onAdd = useCallback(() => {
		setList({
			Drivers: onChangeState(list.Drivers, false),
			TransporterOwners: onChangeState(list.TransporterOwners, false),
		})
	}, [list])

	const onRemove = useCallback(() => {
		setList({
			TransporterOwners: onChangeState(list.TransporterOwners, true),
			Drivers: onChangeState(list.Drivers, true),
		})
	}, [list])

	const onDrop = useCallback((event: DragEvent, isSelected: boolean) => {
		event.preventDefault()
		const value = event.dataTransfer.getData('text/plain')
		const item: ListItem = JSON.parse(value)

		return setList({
			Drivers: item.type === 'Driver' ? onDropItem(list.Drivers, item, isSelected): list.Drivers,
			TransporterOwners: item.type === 'Transporter Owner' ? onDropItem(list.TransporterOwners, item, isSelected): list.TransporterOwners
		})
	}, [list.Drivers, list.TransporterOwners])

	useEffect(() => {
		if(data) {
			setList(data as CompanionList)
		}
	}, [data])

	return (
		<DefaultLayout title={'Companionship / Companions'}>
			<MultiSelectModal
				title={state?.data?.company?.label || 'Companions'}
				tip={'Tip: Drag and drop Transporter Owners and Drivers to change assignments.'}
				open
				searchLabel={'Search'}
				list={renderedList}
				selected={renderedSelectedList}
				selectedTitle={'Assigned Companions'}
				filters={filters}
				onClose={onClose}
				onSave={onSave}
				onChange={onChange}
				onAdd={onAdd}
				onRemove={onRemove}
				onDragStart={onDragStart}
				onDrop={onDrop}
			/>
		</DefaultLayout>
	)
}

export default Companions