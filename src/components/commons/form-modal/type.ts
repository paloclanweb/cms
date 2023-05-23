import type { ReactNode } from 'react'

export type FormModalProps = {
    title?: string
    open: boolean
    width?: string | number
    children: ReactNode
    onClose: () => void
}