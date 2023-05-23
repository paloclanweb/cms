import { type FC, type ReactElement } from 'react'
import {SearchButton, SearchContainer, SearchInner, SearchInput} from './style'
import type { DataGridSearchProps } from './type'
import {IconSearch} from '@/components'
import { useTranslations } from '@/hooks'

const DataGridSearch: FC<DataGridSearchProps> = ({ onSearch = () => undefined }: DataGridSearchProps): ReactElement => {
	const { t } = useTranslations()

	return (
		<SearchContainer component={'section'}>
			<SearchInner>
				<SearchInput
					type={'text'}
					label={t('search')}
					fullWidth
					variant={'outlined'}
					color={'primary'}
					onChange={(event) => onSearch(event.currentTarget.value)}
				/>
				<SearchButton variant={'text'} color={'primary'} disabled>
					<IconSearch />
				</SearchButton>
			</SearchInner>
		</SearchContainer>
	)
}

export default DataGridSearch