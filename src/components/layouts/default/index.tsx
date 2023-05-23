import { type FC, type ReactElement, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {Container,  Main, Version } from './style'
import type { DefaultLayoutProps } from './type'
import { Drawer, Header } from '@/components'
import { useAuth } from '@/hooks'
import { config } from '@/helpers'

const DefaultLayout: FC<DefaultLayoutProps> = ({ children, title }: DefaultLayoutProps): ReactElement => {
	useAuth()
	const { state } = useLocation()
	const [expanded, setExpanded] = useState<boolean>(true)

	useEffect(() => {
		if(state) {
			setExpanded(state?.expanded || true)
		}
	}, [state])

	return (
		<Container>
			<Drawer expanded={expanded} changeExpanded={() => setExpanded(!expanded)} />
			<Main component={'main'}>
				<Header title={title} />
				{children}
			</Main>
			<Version>{config.appVersion}</Version>
		</Container>
	)
}

export default DefaultLayout