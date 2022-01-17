import React, { useState, useEffect } from 'react';

const History = ({ allData }) => {
	console.log('all my data', allData);
	const [listA, setListA] = useState([]);
	const [listB, setListB] = useState([]);
	// console.log('lista A', listA);
	// console.log('lista B', listB);

	useEffect(() => {
		myArrayA();
		myArrayB();
	}, []);

	const myArrayA = () => {
		let i = 0;
		for (i; i < allData.map((value) => value.playerA).length; i++)
			return setListA([...listA, ...allData.map((value) => value.playerA)]);
	};
	const myArrayB = () => {
		let j = 0;
		for (j; j < allData.map((value) => value.playerB).length; j++)
			return setListB([...listB, ...allData.map((value) => value.playerB)]);
	};

	return (
		<>
			<div
				style={{ backgroundColor: 'red', padding: '10px 5px', width: 'fit-content' }}
				// onClick={myArrayA()}
			>
				Array of players A
			</div>
			<div
				style={{ backgroundColor: 'green', padding: '10px 5px', width: 'fit-content' }}
				// onClick={myArrayB()}
			>
				Array of players B
			</div>
			<div
				style={{ backgroundColor: 'blue', padding: '10px 5px', width: 'fit-content' }}
				// onClick={comparePlayers()}
			>
				Hola
			</div>
			<div>
				{allData.map((p, i) => (
					<div key={i} style={{ display: 'flex' }}>
						<h2>{p.playerA.name.length}</h2>
						<h1>
							{p.playerA.name}--
							{p.playerA.played === 'ROCK' && p.playerB.played === 'SCISSORS' ? 'winner' : 'not'}
							--||--
							{p.playerA.played === 'ROCK' &&
								p.playerB.played === 'SCISSORS' &&
								'This player has won with ROCK'}
						</h1>
						-----
						<h1>{p.playerB.name}</h1>
					</div>
				))}
			</div>
		</>
	);
};

export default History;
