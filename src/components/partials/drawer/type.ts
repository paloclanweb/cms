import type { ReactNode } from 'react'

export type DrawerProps = {
    expanded: boolean
    changeExpanded: () => void
}

export type MenuItem = {
    id: string
    title: string
    icon?: ReactNode
    url?: string
}

export type Menu = {
    children?: Array<MenuItem>
} & MenuItem

export type MenuList = Array<Menu>

export type Data = {
    title: string
    menu: MenuList
}

export type MenuProps = {
    width?: string | number
    selected?: boolean
    expanded?: boolean
}