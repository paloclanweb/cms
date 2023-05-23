import {type FC, type ReactElement, useCallback, useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { 
	Container,
	Sidebar,
	Header,
	ExpandButton,
	Menu, 
	MenuTitle, 
	MenuButton, 
	MenuContainer, 
	MenuItem, 
	MenuList, 
	MenuIcon,
} from './style'
import type { DrawerProps, MenuItem as MenuItemProps } from './type'
import { Route } from '@/constant'
import { Box, IconChevron } from '@/components'
import data from './data'
import WhiteLogo from '@/assets/icons/white-logo.svg'
import WhiteMiniLogo from '@/assets/icons/white-mini-logo.svg'

const Drawer: FC<DrawerProps> = ({ expanded, changeExpanded }: DrawerProps): ReactElement => {
	const navigate = useNavigate()
	const { state, pathname } = useLocation()
	const [activeMenu, setActiveMenu] = useState<string | null>(null)
	
	const isSelected = useCallback((id: string): boolean => {
		return activeMenu === id
	}, [activeMenu])

	const toggleMenu = useCallback((item: MenuItemProps): void => {
		if(item.url) {
			return navigate(item.url, {
				state: {
					...state,
					expanded,
					id: item.id
				}
			})
		}
		
		setActiveMenu(item.id)
	}, [activeMenu, state, expanded])

	useEffect(() => {
		if(state) {
			setActiveMenu(state.id)
		}
	}, [state])


	return (
		<Container component={'aside'}>
			<Sidebar expanded={expanded}>
				<ExpandButton onClick={changeExpanded}>
					<IconChevron
						width={24}
						height={24}
						fill={'#000000'}
						style={{
							transform: 'rotate(90deg)',
							transformOrigin: 'center'
						}}
					/>
				</ExpandButton>
				<Header to={Route.Security.AdminUsers.list}>
					<img src={expanded ? WhiteLogo : WhiteMiniLogo} alt={'Yukato'} />
				</Header>
				<Box component={'nav'}>
					{data.map((item, index) => (
						<MenuContainer key={index} component={'ul'}>
							{expanded ? (
								<MenuTitle as={'h2'}>{item.title}</MenuTitle>
							): null}
							{item.menu.map((item, index) => (
								<Menu key={index} expanded={expanded} selected={isSelected(item.id)} component={'li'}>
									<MenuButton onClick={() => toggleMenu(item)} expanded={expanded}>
										{item.icon}
										{expanded ? (
											<>
												{item.title}
												{item.children && (
													<MenuIcon selected={isSelected(item.id)}>
														<IconChevron
															width={24}
															height={24}
															fill={'#FFFFFF'}
															style={{
																transform: 'rotate(180deg)',
																transformOrigin: 'center'
															}}
														/>
													</MenuIcon>
												)}
											</>
										)
									 : null}
									</MenuButton>
									{item.children && (
										<MenuList component={'ul'} selected={isSelected(item.id)} expanded={expanded}>
											{item.children.map((child, childIndex) => (
												<MenuItem component={'li'} key={childIndex}>
													<MenuButton onClick={() => toggleMenu(child)} selected={pathname === item.url}>
														{child.icon}
														{child.title}
													</MenuButton>
												</MenuItem>
											))}
										</MenuList>
									)}
								</Menu>
							))}
						</MenuContainer>
					))}
				</Box>
			</Sidebar>
		</Container>
	)
}

export default Drawer