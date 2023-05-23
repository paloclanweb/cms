import { type FC, type ReactElement } from 'react'
import { LoginForm, AuthLayout } from '@/components'

const Login: FC = (): ReactElement => {
	return (
		<AuthLayout>
			<LoginForm />
		</AuthLayout>
	)
}

export default Login