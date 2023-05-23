import type { ModalProps as MuiModalProps } from '@mui/material'
export type ModalProps = {
    title?: string
    width?: number | string
    onClose?: () => void
    noPadding?: boolean
} & MuiModalProps