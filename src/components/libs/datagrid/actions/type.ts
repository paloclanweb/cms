import type { Dispatch, SetStateAction } from 'react'
import type { Action } from '../type'

export type DataGridActionsProps = {
    actions?: Array<Action>
    anchorEl: HTMLButtonElement | null
    setAnchorEl: Dispatch<SetStateAction<HTMLButtonElement | null>>
    selectedId: string
}