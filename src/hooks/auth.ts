import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Cookie } from '@/helpers'
import { Route } from '@/constant'

const Auth = (): void => {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const BrowserCookie = new Cookie()
	const token = BrowserCookie.get('token')

	useEffect(() => {
		if(pathname.includes('auth') && token) {
			return navigate(Route.Security.AdminUsers.list, { replace: true })
		}

		if(!pathname.includes('auth') && !token) {
			navigate(Route.Auth.Login, { replace: true })
		}
	}, [pathname])
}

export default Auth