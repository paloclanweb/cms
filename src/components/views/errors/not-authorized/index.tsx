import { type FC, type ReactElement } from 'react'
import { Error } from '@/components'
import Image from '@/assets/images/errors/not-authorized.png'

const NotAuthorized: FC = (): ReactElement => {
	return (
		<Error image={Image} title={'Bu sayfaya erişimin yok!'} description={'Erişim için Yukato adminleriyle iletişime geçmelisin.'} />
	)
}

export default NotAuthorized
