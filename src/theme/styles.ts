const styles = {
	'*, ::before, ::after': {
		boxSizing: 'border-box'
	},
	html: {
		fontSize: '10px',
		fontFamily: '\'Roboto\', sans-serif'
	},
	body: {
		fontSize: '1rem',
		margin: 0,
		background: '#E8EAED'
	},
	'ul, ol, dl, menu': {
		listStyle: 'none',
		margin: 0,
		padding: 0
	},
	img: {
		maxWidth: '100%'
	},
	button: {
		'&:not(:disabled)': {
			cursor: 'pointer'
		}
	},
	a: {
		textDecoration: 'none'
	}
}

export default styles