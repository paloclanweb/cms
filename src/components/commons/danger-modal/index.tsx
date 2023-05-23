import { type FC, type ReactElement } from 'react'
import type { DangerModalProps } from './type'
import { Content, Text, Strong } from './style'
import { Modal, Grid, Button } from '@/components'

const DangerModal: FC<DangerModalProps> = ({ title, open, onClose, onConfirm, confirmText, closeText, text, strong }): ReactElement => {
	return (
		<Modal open={open} onClose={onClose} title={title}>
			<Content>
				<Text>{text} {strong && <Strong as={'strong'}>{strong}</Strong>}</Text>
				<Grid container gap={2} alignItems={'center'} justifyContent={'flex-end'}>
					<Grid item>
						<Button variant={'outlined'} color={'primary'} onClick={onClose}>{closeText}</Button>
					</Grid>
					<Grid item>
						<Button variant={'contained'} color={'error'} onClick={onConfirm}>{confirmText}</Button>
					</Grid>
				</Grid>
			</Content>
		</Modal>
	)
}

export default DangerModal