import {type FC, type ReactElement } from 'react'
import {DefaultLayout, FormModal} from '@/components'
import { FormProps } from '@/types'

type Data = {
    [key: string]: any
}

type Props = {
    breadcrumb: string
    title: string
    width?: string | number
    onClose: () => void
    onCreate: (data: Data) => void
    Form: FC<FormProps<Data>>
}

const Create: FC<Props> = ({ breadcrumb, title, width, onClose, onCreate, Form }: Props): ReactElement => {
    return (
        <DefaultLayout title={breadcrumb}>
            <FormModal open onClose={onClose} title={title} width={width}>
                <Form onClose={onClose} onSubmit={onCreate} />
            </FormModal>
        </DefaultLayout>
    )
}

export default Create