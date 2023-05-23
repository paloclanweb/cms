import { type FC, type ReactElement, type ChangeEvent, type DragEvent, useState, useCallback, useEffect} from 'react'
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom'
import { Route } from '@/constant'
import { useDnd } from '@/hooks'
import { DefaultLayout, MultiSelectModal, type List, type ListItem } from '@/components'
import { RoleService } from '@/service'
import { useToast } from '@/hooks'

const Permissions: FC= (): ReactElement => {
	const { onChangeState, onDragStart, onDropItem, renderList, renderSelectedList } = useDnd()
	const data = useLoaderData() as List
	const { state } = useLocation()
	const navigate = useNavigate()
	const toast = useToast()
	const [list, setList] = useState<List>([])

	const onClose = useCallback(() => {
		navigate(Route.Security.Web.Roles.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const onSave = useCallback(async (): Promise<void> => {
		if(!state?.data?.Id) {
			return
		}

		const Role = new RoleService()
		const permissions = list.filter(item => item.isSelected).map(item => item.value)

		const response = await Role.update({
			...state.data,
			RoleGroup: +state.data.RoleGroup,
			Permissions: permissions
		})

		onClose()

		if(!response) {
			return toast({
				message: 'Something went wrong, try again later',
				status: 'error'
			})
		}

		toast({
			message: 'Permissions assigned successfully',
			status: 'success'
		})
	}, [state, list])

	const onChange = useCallback((event: ChangeEvent<HTMLInputElement>, item: ListItem): void => {
		const { checked } = event.currentTarget

		return setList([...list.map(permission => permission.value === item.value ? { ...permission, isChecked: checked } : permission)])
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

	useEffect(() => {
		if(data) {
			setList(data)
		}
	}, [data])

	return (
		<DefaultLayout title={'Web / Roles / Permissions'}>
			<MultiSelectModal
				tip={'Tip: Drag and drop Permissions to change assignments.'}
				searchLabel={'Search a Permission'}
				listTitle={'All Permissions'}
				selectedTitle={'Assigned Permissions'}
				list={renderList(list)}
				selected={renderSelectedList(list)}
				title={state.data.Name || ''}
				open
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

export default Permissions