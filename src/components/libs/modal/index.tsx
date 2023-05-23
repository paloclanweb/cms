import { type FC, type ReactElement } from 'react'
import type { ModalProps } from './type'
import { Container, Inner, Header } from './style'
import { Grid, Button, IconClose } from '@/components'

const Modal: FC<ModalProps> = ({ title, open = false, className, onClose = () => undefined, children, sx, width, style, ...rest }: ModalProps): ReactElement => {
	return (
		<Container open={open} onClose={onClose} className={className} sx={sx} style={style} {...rest}>
			<Inner width={width}>
				{title && (
					<Header>
						<Grid container justifyContent="space-between" alignItems="center">
							<Grid item xs>
								{title}
							</Grid>
							<Grid item>
								<Button onClick={onClose}>
									<IconClose />
								</Button>
							</Grid>
						</Grid>
					</Header>
				)}
				{children}
			</Inner>
		</Container>
	)
}

export default Modal