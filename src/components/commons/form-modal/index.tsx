import { type FC, type ReactElement } from 'react'
import type { FormModalProps } from './type'
import { Modal } from '@/components'

const FormModal: FC<FormModalProps> = ({ children, onClose, open = false, title, width }: FormModalProps): ReactElement => {
	return (
		<Modal open={open} onClose={onClose} width={width} title={title}>
			<>
				{children}
			</>
		</Modal>
	)
}

export default FormModal