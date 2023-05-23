import type { ChangeEvent, DragEvent } from 'react'
import type { List, ListItem, ListProps } from '@/components'

export type MultiSelectModalProps = {
    title?: string
    tip?: string
    open?: boolean
    searchLabel?: string
    list?: List
    listTitle?: string
    selected?: Array<ListItem>
    selectedTitle?: string
    filters?: ListProps['filters']
    onClose?: () => void
    onSave?: () => void
    onAdd: () => void
    onRemove: () => void
    onChange: (event: ChangeEvent, item: ListItem) => void
    onDragStart: (event: DragEvent, item: ListItem) => void
    onDrop: (event: DragEvent, isSelected: boolean) => void
}