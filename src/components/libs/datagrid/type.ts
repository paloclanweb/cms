import type { ReactNode } from 'react'
import type { BoxProps } from '@/components'

export type Header = {
    field: string;
    headerName: string;
};

export type Content = {
    Id: string
    [key: Header['field']]: ReactNode;
};

export type Action = {
    icon: ReactNode
    onAction: (id: string) => void
    text: string
}

export type DataGridProps = {
    headers: Array<Header>;
    content: Array<Content>;
    children?: ReactNode
    onSearch?: (keyword: string) => void;
    actions?: Array<Action>
};

export type DataGridContainerProps = {
    column?: number;
} & BoxProps