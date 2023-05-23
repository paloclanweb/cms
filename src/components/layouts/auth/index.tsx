import { type FC, type ReactElement } from 'react'
import { Section, BackgroundContainer, Version } from './style'
import type { AuthLayoutProps } from './type'
import Truck from '@/assets/images/truck.png'
import { useAuth } from '@/hooks'
import { config } from '@/helpers'

const AuthLayout: FC<AuthLayoutProps> = ({ children }: AuthLayoutProps): ReactElement => {
	useAuth()
	return (
		<Section component={'section'}>
			<BackgroundContainer>
				<img src={Truck} alt="truck" />
			</BackgroundContainer>
			{children}
			<Version>{config.appVersion}</Version>
		</Section>
	)
}

export default AuthLayout