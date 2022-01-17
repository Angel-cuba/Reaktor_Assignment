import React, { useEffect, useState } from 'react';
import Games from './Games';
import History from './History';
import { useStyles } from './styles';

const Results = () => {
	const [allData, setAllData] = useState();
	const [open, setOpen] = useState(false);
	const [openHistory, setOpenHistory] = useState(false);

	const classes = useStyles();

	useEffect(() => {
		results();
	}, []);

	const results = async () => {
		const response = await fetch('https://bad-api-assignment.reaktor.com/rps/history');
		const data = await response.json();
		console.log(data);
		setAllData(data.data);
	};
	const openModal = () => {
		setOpen(!open);
		if (openHistory) {
			setOpenHistory(false);
		}
	};
	const openModalHistory = () => {
		setOpenHistory(!openHistory);
		if (open) {
			setOpen(false);
		}
	};

	return (
		<div>
			<div className={classes.header}>
				<h2 className={classes.onGoing} onClick={openModal}>
					On going!
				</h2>
				<h2 className={classes.goHistorySide} onClick={openModalHistory}>
					History
				</h2>
			</div>
			{openHistory && (
				<>
					<History allData={allData} />
				</>
			)}
			{open && (
				<>
					<div className={classes.test}>
						{allData && allData.map((p, index) => <Games play={p} key={index} />)}
					</div>
				</>
			)}
		</div>
	);
};

export default Results;
