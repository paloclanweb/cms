import { useContext } from 'react'
import { ToastContext } from '@/context'
import type { State } from '@/context/toast/type'

const Toast = () => {
	const { setToast } = useContext(ToastContext)

	return ({ message, status }: State): void => {
		setToast({
			open: true,
			message,
			status,
		})
	}
}

export default Toast