import {
	type FC, 
	type ReactElement, 
	type ChangeEvent, 
	type DragEvent, 
	useCallback, 
	useMemo, 
	useState
} from 'react'
import type {RolesAndPermissionsProps} from './type'
import { MultiSelectModal, type ListItem } from '@/components'
import { useDnd } from '@/hooks'

const RolesAndPermissions: FC<RolesAndPermissionsProps> = ({ 
	title, 
	open,  
	onClose = () => undefined,
	onSave = () => undefined,
	list = {
		roles: [],
		permissions: []
	},
	setList,
}: RolesAndPermissionsProps): ReactElement => {
	const { 
		onChangeState, 
		onCheck, 
		renderList, 
		renderSelectedList,
		onDragStart,
		onDropItem,
	} = useDnd()

	const [activeListIndex, setActiveListIndex] = useState<0 | 1>(0)

	const filters = useMemo(() => {
		return [
			{
				label: 'Roles',
				onClick: () => {
					setActiveListIndex(0)
				}
			},
			{
				label: 'Permissions',
				onClick: () => {
					setActiveListIndex(1)
				}
			},
		]
	}, [])

	const onChange = useCallback((event: ChangeEvent<HTMLInputElement>, item: ListItem): void => {
		if(item.type === 'Permission') {
			return setList({
				...list,
				permissions: onCheck(event, list.permissions, item)
			})
		}

		setList({
			...list,
			roles: onCheck(event, list.roles, item)
		})
	}, [list.permissions, list.roles])

	const onAdd = useCallback(() => {
		setList({
			permissions: onChangeState(list.permissions, false),
			roles: onChangeState(list.roles, false),
		})
	}, [list])

	const onRemove = useCallback(() => {
		setList({
			permissions: onChangeState(list.permissions, true),
			roles: onChangeState(list.roles, true),
		})
	}, [list])

	const onDrop = useCallback((event: DragEvent, isSelected: boolean) => {
		event.preventDefault()
		const value = event.dataTransfer.getData('text/plain')
		const item: ListItem = JSON.parse(value)

		return setList({
			roles: item.type === 'Role' ? onDropItem(list.roles, item, isSelected) : list.roles,
			permissions: item.type === 'Permission' ? onDropItem(list.permissions, item, isSelected): list.permissions
		})
	}, [list.permissions, list.roles])

	const renderedList = useMemo(() => {
		if(activeListIndex === 1) {
			return renderList(list.permissions)
		}

		return renderList(list.roles)
	}, [activeListIndex, list])

	const renderedSelectedList = useMemo(() => {
		return renderSelectedList([...list.roles, ...list.permissions])
	}, [list])

	return (
		<MultiSelectModal
			selectedTitle={'Assigned Roles & Permissions'}
			tip={'Tip: Drag and drop Roles and Permissions to change assignments.'}
			searchLabel={'Search a Role/Permission'}
			filters={filters}
			list={renderedList}
			selected={renderedSelectedList}
			title={title}
			open={open}
			onClose={onClose}
			onSave={onSave}
			onChange={onChange}
			onAdd={onAdd}
			onRemove={onRemove}
			onDragStart={onDragStart}
			onDrop={onDrop}
		/>
	)
}

export default RolesAndPermissions