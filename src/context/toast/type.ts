import type { Dispatch, SetStateAction, ReactNode } from 'react'
import type { ToastProps } from '@/components'

export type State = {
    open?: boolean
    message: string
    status: ToastProps['status']
}

export type Context = {
    toast: State
    setToast: Dispatch<SetStateAction<State>>
}

export type Provider = {
    children?: ReactNode
}