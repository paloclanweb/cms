import {type FC, type ReactElement } from 'react'
import {DefaultLayout } from '@/components'

const headers = [
	{
		field: 'menu',
		headerName: 'Menu Name',
	},
]

const ReadyMessages: FC = (): ReactElement => {
	return (
		<DefaultLayout title={'Ready Messages'}>
			{/*<Datagrid*/}
			{/*    headers={headers}*/}
			{/*    data={data}*/}
			{/*    content={content}*/}
			{/*    actions={[...actions]}*/}
			{/*>*/}
			{/*</Datagrid>*/}
		</DefaultLayout>
	)
}

export default ReadyMessages