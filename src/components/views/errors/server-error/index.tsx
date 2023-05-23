import {type FC, type ReactElement} from 'react'
import { Error } from '@/components'
import Image from '@/assets/images/errors/server-error.png'

const ServiceUnavailable: FC = (): ReactElement => {
	return (
		<Error image={Image} title={'Dahili Sunucu Hatası'} description={'Üzgünüz, bir sorunla karşılaştık. Lütfen daha sonra tekrar deneyin.'} />
	)
}

export default ServiceUnavailable