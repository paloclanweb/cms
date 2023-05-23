import { styled } from '@mui/material'
import { Link, type LinkProps } from 'react-router-dom'
import {Box, Button, Typography, type TypographyProps, type ButtonProps, type BoxProps} from '@/components'
import type { MenuProps } from './type'

export const Container = styled(Box)<BoxProps>(() => ({
	position: 'relative',
	height: '100vh'
}))

export const Sidebar = styled(Box)<BoxProps & MenuProps>(({theme, expanded = 1}) => ({
	background: theme.palette.primary[400],
	color: theme.palette.primary.contrastText,
	padding: '2rem 0',
	height: '100%',
	width: expanded ? '27rem' : '6rem',
	transition: 'width 0.2s ease-out',
	overflowY: 'auto'
}))

export const Header = styled(Link)<LinkProps & MenuProps>(({expanded = 1}) => ({
	display: 'block',
	padding: '2rem 1.6rem',
	...(!expanded && ({
		textAlign: 'center',
	})),
}))

export const ExpandButton = styled(Button)<ButtonProps>(({theme}) => ({
	minWidth: 'auto',
	width: '3.2rem !important',
	height: '3.2rem !important',
	padding: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: '100%',
	boxShadow: '0 0.2rem 0.4rem rgba(0, 0, 0, 0.2)',
	background: theme.palette.common.white,
	position: 'absolute',
	right: '-2rem',
	zIndex: 1,
	'&:hover': {
		background: theme.palette.common.white,
	},
	'svg': {
		pointerEvent: 'none'
	}
}))

export const MenuContainer = styled(Box)<BoxProps & MenuProps>(({ expanded = 0 }) => ({
	marginTop: '3rem',
	padding: expanded ? '0 1.6rem' : '0 1rem',
}))

export const Menu = styled(Box)<BoxProps & MenuProps>(({theme, expanded = 0, selected = 0 }) => ({
	borderRadius: '0.8rem',
	...(selected && ({
		background: theme.palette.primary[500],
	})),
	...(!expanded && ({
		position: 'relative',
	}))
}))

export const MenuList = styled(Box)<BoxProps & MenuProps>(({theme, expanded = 0, selected = 0 }) => ({
	...(expanded ? ({
		transition: 'max-height 0.2s ease-out',
		...(!selected ? ({
			maxHeight: '0',
			overflow: 'hidden',
		}): ({
			maxHeight: '10rem',
			overflow: 'auto'
		}))
	}): ({
		position: 'absolute',
		top: '100%',
		left: '0',
		background: theme.palette.primary[400],
		transition: 'all 0.2s ease-out',
		width: '34.6rem',
		zIndex: 1,
		borderRadius: '1.2rem',
		...(!selected ? ({
			opacity: 0,
			visibility: 'hidden',
		}): ({
			opacity: 1,
			visibility: 'visible',
		}))
	}))
}))

export const MenuItem = styled(Box)<BoxProps & MenuProps>(() => ({

}))

export const MenuTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
	color: theme.palette.primary[100],
	marginBottom: '2.5rem'
}))

export const MenuButton = styled(Button)<ButtonProps & MenuProps>(({ theme, expanded = 0, selected = 0 }) => ({
	color: theme.palette.primary.contrastText,
	fontWeight: 400,
	fontSize: '1.4rem',
	width: '100%',
	minWidth: 'auto',
	justifyContent: 'flex-start',
	padding: 0,
	position: 'relative',
	'&:hover': {
		background: theme.palette.primary[300],
		color: theme.palette.primary.contrastText,
	},
	...(expanded && ({
		borderRadius: '1.2rem'
	})),
	...(selected && ({
		background: theme.palette.primary[300]
	})),
}))

export const MenuIcon = styled(Box)<BoxProps & MenuProps>(({ expanded = 0, selected = 0 }) => ({
	position: 'absolute',
	top: '50%',
	right: '1.6rem',
	transform: 'translateY(-50%)',
	'svg': {
		transition: 'transform 0.2s ease-out',
		...(selected && ({
			transformOrigin: 'center',
			transform: 'rotate(180deg)',
		}))
	}
}))