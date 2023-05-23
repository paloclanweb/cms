import { type FC, type ReactElement, type ChangeEvent, type DragEvent, useEffect, useState, useCallback } from 'react'
import { useLoaderData, useNavigate, useLocation, useParams } from 'react-router-dom'
import { DefaultLayout, MultiSelectModal, type ListItem, type List } from '@/components'
import { Route } from '@/constant'
import { useDnd, useToast } from '@/hooks'
import { EndpointService } from '@/service'

const Groups: FC= (): ReactElement => {
	const params = useParams()
	const toast = useToast()
	const { state } = useLocation()
	const navigate = useNavigate()
	const data = useLoaderData() as List
	const { onChangeState, onDropItem, renderList, renderSelectedList, onDragStart } = useDnd()
	const [list, setList] = useState<List>([])

	const onChange = useCallback((event: ChangeEvent<HTMLInputElement>, item: ListItem): void => {
		const { checked } = event.currentTarget

		return setList([...list.map(group => group.value === item.value ? { ...group, isChecked: checked } : group)])
	}, [list])

	const onAdd = useCallback((): void => {
		setList(onChangeState(list, false))
	}, [list])

	const onRemove = useCallback((): void => {
		setList(onChangeState(list, true))
	}, [list])

	const onDrop = useCallback((event: DragEvent, isSelected: boolean): void => {
		event.preventDefault()
		const value = event.dataTransfer.getData('text/plain')
		const item: ListItem = JSON.parse(value)

		return setList(onDropItem(list, item, isSelected))
	}, [list])

	const onClose = useCallback(() => {
		navigate(Route.Security.Endpoints.Permissions.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const onSave = useCallback(async() => {
		const selectedList = renderSelectedList(list)

		if(!params.id) {
			return
		}

		const Service = new EndpointService()
		const response = await Service.updateGroups(params.id, selectedList.map(item => item.value))

		onClose()

		if(!response) {
			return toast({
				message: 'Something went wrong!',
				status: 'error'
			})
		}

		toast({
			message: 'Groups updated successfully!',
			status: 'success'
		})
	}, [list, params])

	useEffect(() => {
		if(data) {
			setList(data)
		}
	}, [data])
    
	return (
		<DefaultLayout title={'Endpoint / Permission / Groups'}>
			<MultiSelectModal
				tip={'Tip: Drag and drop Groups to change assignments.'}
				searchLabel={'Search'}
				listTitle={'All Groups'}
				selectedTitle={'Assigned Groups'}
				list={renderList(list)}
				selected={renderSelectedList(list)}
				title={state?.data?.Path || ''}
				open
				onClose={onClose}
				onSave={onSave}
				onChange={onChange}
				onAdd={onAdd}
				onRemove={onRemove}
				onDrop={onDrop}
				onDragStart={onDragStart}
			/>
		</DefaultLayout>
		
	)
}

export default Groups