import { type DragEvent, type ChangeEvent, useCallback } from 'react'
import type { List, ListItem } from '@/components'

const Dnd = () => {
	const onChangeState = useCallback((list?: List, isRemove?: boolean): List => {
		if(!list) {
			return []
		}

		return [...list.map(item => {
			if(isRemove && item.isChecked && item.isSelected) {
				return {
					...item,
					isSelected: false,
					isChecked: false,
				}
			}

			if(!item.isSelected && item.isChecked) {
				return {
					...item,
					isSelected: true,
					isChecked: false,
				}
			}

			return item
		})]
	}, [])

	const onCheck = useCallback((event: ChangeEvent<HTMLInputElement>, list?: List, item?: ListItem): List => {
		const { checked } = event.currentTarget

		if(!list || !item) {
			return []
		}

		return [...list.map(listItem => listItem.value === item.value ? { ...listItem, isChecked: checked } : listItem)]
	}, [])

	const renderList = useCallback((list?: List): List => {
		return list ? [...list.filter(listItem => !listItem.isSelected)] : []
	}, [])

	const renderSelectedList = useCallback((list?: List): List => {
		return list ? [...list.filter(listItem => listItem.isSelected)] : []
	}, [])

	const onDragStart = useCallback((event: DragEvent, item: ListItem): void => {
		event.dataTransfer.setData('text/plain', JSON.stringify(item))
	}, [])

	const onDropItem = useCallback((list: List, item: ListItem, isSelected: boolean): List => {
		return [...list.map(listItem => listItem.value === item.value ? { ...listItem, isSelected, isChecked: false } : listItem)]
	}, [])
    
	return {
		onChangeState,
		renderList,
		renderSelectedList,
		onCheck,
		onDragStart,
		onDropItem
	}
}

export default Dnd