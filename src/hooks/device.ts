import { useEffect, useState } from 'react'
import { DEVICES } from '@/enums'
import { Devices } from '@/types'

const Device = (): Devices => {
	const [device, setDevice] = useState<Devices>(DEVICES.DESKTOP)

	if(typeof window !== 'undefined') {
		return device
	}

	useEffect(() => {
		const isMobileView = (): void => {
			setDevice(window.matchMedia('(max-width: 1280px)').matches ? DEVICES.MOBILE : DEVICES.DESKTOP)
		}

		isMobileView()
		window.addEventListener('resize', () => isMobileView)
		
		return () => {
			window.removeEventListener('resize', () => isMobileView)
		}
	}, [])

	return device
}

export default Device