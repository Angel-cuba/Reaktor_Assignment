import React from 'react';
import { useStyles } from './styles';

const Games = ({ play }) => {
	// console.log('click');
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.names}>
				<h3>Player A: {play.playerA.name}</h3>
				<h3>Player B: {play.playerB.name}</h3>
			</div>
			<div className={classes.results}>
				Played:
				<div className="">
					<h2> {play.playerA.played}</h2>
					<h2> {play.playerB.played}</h2>
				</div>
			</div>
		</div>
	);
};

export default Games;
