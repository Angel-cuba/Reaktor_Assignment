import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	container: {
		backgroundColor: 'rgba(0,0,0,.14)',
		width: 'fit-content',
		padding: '10px',
		borderRadius: '5px',
		margin: '.6rem',
	},
	test: {
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		margin: 'auto',
	},
	header: {
		display: 'flex',
		justifyContent: 'space-around',
	},

	goHistorySide: {
		backgroundColor: 'rgba(0,0,0,.6)',
		width: 'fit-content',
		padding: '5px 10px',
		borderRadius: '5px',
		color: '#ffffff',
		cursor: 'pointer',
	},
	onGoing: {
		backgroundColor: 'rgba(0,0,0,.6)',
		width: 'fit-content',
		padding: '5px 10px',
		borderRadius: '5px',
		color: '#ffffff',
		cursor: 'pointer',
	},
	th: {
		border: '1px solid #999',
		padding: '0.8rem',
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,.2)',
	},
	tb: {
		border: '1px solid #999',
		padding: 'o.5rem 0.8rem',
		textAlign: 'center',
	},
	tbClicks: {
		backgroundColor: 'rgba(0,0,0,0.05)',
		width: 'fit-content',
		textAlign: 'center',
		padding: '0.2rem',
		borderRadius: '5px',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: 'rgba(0,0,0,0.07)',
		},
	},
	thTotal: {
		border: '1px solid #999',
		padding: 'o.5rem',
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	clickTotal: {
		backgroundColor: 'rgba(0,0,0,0.024125)',
		padding: '10px 5px',
		width: 'fit-content',
		borderRadius: '5px',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: 'silver',
			color: 'white',
			fontWeight: 'bold',
		},
	},
});
