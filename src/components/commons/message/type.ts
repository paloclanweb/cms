import type { ReactNode } from 'react'

export type StatusSuccessProps = {
    icon: ReactNode
    title: string
    description?: string
    back?: {
        url: string
        text: string
    }
}