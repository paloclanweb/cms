import { type FC, type ReactElement } from 'react'
import { AuthLayout, ForgotPasswordForm } from '@/components'

const ForgotPassword: FC = (): ReactElement => {
	return (
		<AuthLayout>
			<ForgotPasswordForm />
		</AuthLayout>
	)
}

export default ForgotPassword