import type { Dispatch, SetStateAction } from 'react'
import type { RolesAndPermissionList } from '@/types'

export type RolesAndPermissionsProps = {
    title?: string
    open?: boolean
    list: RolesAndPermissionList
    setList: Dispatch<SetStateAction<RolesAndPermissionList>>
    onClose?: () => void
    onSave?: () => void
}