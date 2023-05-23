import type { RoleModel } from '@/service'

export type AuthorizationProps = {
    data: RoleModel
    open?: boolean
    onClose: () => void
}