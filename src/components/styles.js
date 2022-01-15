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
});
