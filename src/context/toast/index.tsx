import {type FC, type ReactElement, createContext, useState} from 'react'
import type {State, Context, Provider} from './type'
import {Toast} from '@/components'

const initialValue: State = {
	open: false,
	message: '',
	status: 'success',
}

export const ToastContext = createContext<Context>({
	setToast: () => undefined,
	toast: initialValue
})

export const ToastProvider: FC<Provider> = ({ children }: Provider): ReactElement => {
	const [toast, setToast] = useState<State>(initialValue)

	return (
		<ToastContext.Provider value={{
			setToast,
			toast
		}}>
			{children}
			<Toast
				open={toast.open}
				message={toast.message}
				status={toast.status}
				onClose={() => setToast(initialValue)}
			/>
		</ToastContext.Provider>
	)
}