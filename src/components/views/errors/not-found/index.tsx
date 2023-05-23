import {type FC, type ReactElement} from 'react'
import { Error } from '@/components'
import Image from '@/assets/images/errors/not-found.png'

const NotFound: FC = (): ReactElement => {
	return (
		<Error image={Image} title={'Sayfa Bulunamadı!'} description={'Aradığınız sayfa mevcut değil ya da taşınmış olabilir.'} />
	)
}

export default NotFound
