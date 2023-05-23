import { type FC, type ReactElement } from 'react'
import { AuthLayout, ResetPasswordForm } from '@/components'

const ResetPassword: FC = (): ReactElement => {
	return (
		<AuthLayout>
			<ResetPasswordForm />
		</AuthLayout>
	)
}

export default ResetPassword