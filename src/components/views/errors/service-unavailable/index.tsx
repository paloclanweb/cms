import {type FC, type ReactElement} from 'react'
import { Error } from '@/components'
import Image from '@/assets/images/errors/service-unavailable.png'

const ServiceUnavailable: FC = (): ReactElement => {
	return (
		<Error image={Image} title={'Sistem Kullanılamıyor :('} description={'Bir şeyler çalışmıyor ya da ters gitti. Lütfen daha sonra tekrar dene.'} />
	)
}

export default ServiceUnavailable