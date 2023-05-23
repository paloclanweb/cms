import type { RouteObject } from 'react-router-dom'
import {
	ForgotPassword,
	Login,
	ResetPassword,
	ServiceUnavailable
} from '@/components'
import { AgreementService } from '@/service'
import Agreement from '@/components/views/agreement'

const AuthRoutes: RouteObject = {
	path: '/auth',
	children: [
		{
			path: 'login',
			element: <Login />,
		},
		{
			path: 'forgot-password',
			element: <ForgotPassword />,
		},
		{
			path: 'reset-password',
			element: <ResetPassword />,
		},
		{
			path: 'agreement/:language/:step',
			element: <Agreement />,
			loader: async ({ params }): Promise<string> => {
				if(!params.step || !params.language) {
					return ''
				}
	
				const Service = new AgreementService()
				return await Service.steps(params.language, +params.step) || ''
			},
			errorElement: <ServiceUnavailable />
		},
	]
}

export default AuthRoutes