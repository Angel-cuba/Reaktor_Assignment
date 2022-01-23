import React from 'react';
import { useStyles } from './styles';

const Games = ({ play }) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.names}>
				<h3 className={classes.title}>
					<span>Player A: </span>
					<span>{play.playerA.name}</span>
				</h3>
				<div className={classes.line}></div>
				<h3 className={classes.title}>
					<span>Player B: </span>
					<span>{play.playerB.name}</span>
				</h3>
			</div>
			<div className={classes.results}>
				{play.playerA.played === play.playerB.played ? 'Same played' : 'Played:'}

				<div className={classes.played}>
					<h2>{play.playerA.played}</h2>
					<h2>{play.playerB.played}</h2>
				</div>
			</div>
		</div>
	);
};

export default Games;
