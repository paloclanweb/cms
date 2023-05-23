import type { ChangeEvent, DragEvent } from 'react'

export type ListItem = {
    value: string
    label: string
    type: string
    isChecked: boolean
    isSelected: boolean
}

export type List = Array<ListItem>

export type ListProps = {
    title?: string
    searchLabel?: string
    list?: List
    filters?: Array<{
        label: string
        onClick: () => void
    }>
    onChange?: (event: ChangeEvent<HTMLInputElement>, item: ListItem) => void
    onDragStart?: (event: DragEvent, item: ListItem) => void
    onDrop?: (event: DragEvent) => void
    onDragEnd?: (event: DragEvent) => void
}

export type Filter = {
    active?: 0 | 1
}