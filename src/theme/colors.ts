export const red = {
	'50': '#FFEDEA',
	'100': '#FFDAD6',
	'200': '#FFB4AB',
	'300': '#FF897D',
	'400': '#FF5449',
	'500': '#DE3730',
	'600': '#BA1A1A',
	'700': '#93000A',
	'800': '#690005',
	'900': '#410002',
}

export const blue = {
	'50': '#DAF5FF',
	'100': '#AFECFF',
	'200': '#57D6F6',
	'300': '#2FBAD9',
	'400': '#009EBB',
	'500': '#00829B',
	'600': '#00687B',
	'700': '#004E5D',
	'800': '#003641',
	'900': '#001F27',
	A100: '#62DAFF',
	A200: '#00C3F4',
	A400: '#00A7C6',
	A700: '#006C81',
} as const

export const teal = {
	'25': '#EAFBFA',
	'50': '#C5FAF7',
	'100': '#91F2EF',
	'200': '#4EDAD5',
	'300': '#21BEBA',
	'400': '#00A29D',
	'500': '#008582',
	'600': '#006A67',
	'700': '#00504E',
	'800': '#003735',
	'900': '#00201F',
	A100: '#4DFDF6',
	A200: '#00E1D9',
	A400: '#00A9A4',
	A700: '#007E7B',
} as const

export const green = {
	'50': '#E1FFE8',
	'100': '#BEFFC4',
	'200': '#71FF7F',
	'300': '#3FEB50',
	'400': '#26CC37',
	'500': '#07AD18',
	'600': '#008B0E',
	'700': '#006A0B',
	'800': '#004A07',
	'900': '#002D04',
	A100: '#97FFA1',
	A200: '#40FF53',
	A400: '#08D11C',
	A700: '#008B0E',
} as const

export const yellow = {
	'50': '#FFEEE1',
	'100': '#FFDCBE',
	'200': '#FFB871',
	'300': '#EB993F',
	'400': '#CC7F26',
	'500': '#AD6607',
	'600': '#8B5000',
	'700': '#6A3C00',
	'800': '#4A2800',
	'900': '#2D1600',
	A100: '#FFCB9E',
	A200: '#FFA74F',
	A400: '#BF6D0E',
	A700: '#8B4F00',
} as const

export const gray = {
	'50': '#E8EAED',
	'100': '#D7DAE0',
	'200': '#C6CAD2',
	'300': '#B4BAC5',
	'400': '#A3AAB8',
	'500': '#929AAB',
	'600': '#7B8499',
	'700': '#596173',
	'800': '#434956',
	'900': '#282C34',
	A100: '#A5B3C9',
	A200: '#8A96AE',
	A400: '#64738F',
	A700: '#4E5870',
} as const

export const common = {
	black: '#000000',
	white: '#FFFFFF',
} as const

export default {
	red,
	blue,
	teal,
	green,
	gray,
	yellow,
	common,
} as const

export type Gray = typeof gray
export type Red = typeof red
export type Blue = typeof blue
export type Teal = typeof teal
export type Green = typeof green
export type Yellow = typeof yellow