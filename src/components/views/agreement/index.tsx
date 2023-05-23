import { type FC, type ReactElement, type UIEvent, useState, useCallback, useMemo } from 'react'
import { useLoaderData, useNavigate, useLocation, useParams } from 'react-router-dom'
import { Route } from '@/constant'
import { AuthLayout, DynamicLoad, Button, Grid } from '@/components'
import { Modal, ModalInner, Title, Content, ButtonContainer, PageButton } from './style'

const Agrement: FC = (): ReactElement => {
	const [disabled, setDisabled] = useState<boolean>(true)
	const params = useParams()
	const data = useLoaderData() as string
	const navigate = useNavigate()
	const { state } = useLocation()

	const page = useMemo(() => {
		if(!params.step) {
			return 1
		}

		 return +params.step
	}, [params])

	const onClose = useCallback(() => {
		navigate(Route.Auth.Login)
	}, [state])

	const getPage = useCallback((page: number) => {
		navigate(Route.Auth.Agreement('tr', page), {
			replace: true,
			state: {
				...state,
				data: null
			}
		 })
	}, [state])

	const nextPage = useCallback(() => {
		if(page < 5) {
			getPage(page + 1)
		}
	}, [disabled, getPage, page])

	const checkActive = useCallback((pageNumber: number): 1 | 0 => {
		return page === pageNumber ? 1 : 0
	}, [page])

	const onScroll = useCallback((event: UIEvent) => {
		const { scrollTop, clientHeight, scrollHeight } = event.currentTarget
		const percent = (scrollTop / (scrollHeight - clientHeight)) * 100

		setDisabled(percent < 100)
	}, [])

	const title = [
		'KİŞİSEL VERİLERİN KORUNMASINA İLİŞKİN TAAHÜTNAME',
		'İNTERNET SİTESİ ZİYARETÇİ AYDINLATMA METNİ',
		'ÜYELİK VE KULLANICI ŞARTLARI SÖZLEŞMESİ',
		'ÇEREZ AYDINLATMA METNİ',
		'TÜZEL KİŞİ YETKİLİSİ - KİŞİSEL VERİLERİN KORUNMASI AYDINLATMA METNİ'
	]

	return (
		<AuthLayout>
			<DynamicLoad data={data}>
				<Modal open onClose={onClose} width={'74rem'}>
					<ModalInner>
						<ButtonContainer>
							<PageButton active={checkActive(1)}>1</PageButton>
							<PageButton active={checkActive(2)}>2</PageButton>
							<PageButton active={checkActive(3)}>3</PageButton>
							<PageButton active={checkActive(4)}>4</PageButton>
							<PageButton active={checkActive(5)}>5</PageButton>
						</ButtonContainer>
						<Title>{title[page - 1]}</Title>
						<Content onScroll={onScroll} dangerouslySetInnerHTML={{
							__html: data
						}} />
						<Grid container justifyContent={'flex-end'}>
							<Grid item>
								<Button onClick={nextPage} disabled={disabled} color={'primary'} variant={'contained'}>ACCEPT AND PROCEED</Button>
							</Grid>
						</Grid>
					</ModalInner>
				</Modal>
			</DynamicLoad>
		</AuthLayout>
	)
}

export default Agrement