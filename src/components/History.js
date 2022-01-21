import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useStyles } from './styles';

const History = ({ allData }) => {
	const classes = useStyles();
	// console.log('all my data', allData);
	const [listA, setListA] = useState([]);
	const [listB, setListB] = useState([]);
	// console.log('lista A', listA);
	// console.log('lista B', listB);
	const [amount, setAmount] = useState();
	const [final, setNewAmount] = useState([]);
	console.log(amount);
	// console.log('final-----', final);

	const [fullArray, setFullArray] = useState([]);
	console.log(fullArray);

	useEffect(() => {
		myArrayA();
		myArrayB();
		setFullArray([
			...fullArray,
			...allData.map((value) => value.playerA),
			...allData.map((value) => value.playerB),
		]);
	}, []);

	//All players name in same Array
	const fullListNames = [
		...allData.map((value) => value.playerA.name),
		...allData.map((value) => value.playerB.name),
	];

	// console.log(fullArray);
	useLayoutEffect(() => {}, []);
	//Cantidad de veces en que aparece
	const AmountList = () => {
		fullListNames.reduce((acc, item) => {
			if (!acc[item]) {
				acc[item] = [];
			}
			acc[item].push(item);
			// acc[item] = acc[item] + 1 || 1;
			setAmount(acc);

			return acc;
		}, {});
	};

	//All playersA
	const myArrayA = () => {
		let i = 0;
		for (i; i < allData.map((value) => value.playerA).length; i++)
			return setListA([...listA, ...allData.map((value) => value.playerA)]);
	};
	//All playersB
	const myArrayB = () => {
		let j = 0;
		for (j; j < allData.map((value) => value.playerB).length; j++)
			return setListB([...listB, ...allData.map((value) => value.playerB)]);
	};

	const testing = (value) => {
		let arr = [];
		for (let a in amount) {
			for (let i = 0; i < amount.length; i++) {
				if (amount[i] === value) {
					// alert(a + ' is now ' + amount[a].length);
					arr.push([...amount, ...amount[a].length]);
				}
			}
			alert(value + ' has ' + amount[value].length);

			return arr;

			// setNewAmount(amount[a].length);
			// document.getElementById('InnerH1').innerHTML = `<span>${a} has ${amount[a].length}</span>`;

			// break;
			//console.log('arr' + arr);
		}
		// console.log(final);
	};

	return (
		<>
			<div style={{ position: 'relative', width: '100%', height: '100%' }}>
				<h1 id="InnerH1" style={{ position: 'absolute', top: 10, right: 10 }}>
					Hola
				</h1>

				<div
					style={{ backgroundColor: 'red', padding: '10px 5px', width: 'fit-content' }}
					onClick={() => AmountList()}
				>
					Array of players A
				</div>

				<div>
					<table style={{ borderSpacing: '1px' }}>
						<thead>
							<tr>
								<th className={classes.th}>Name</th>
								<th className={classes.th}>Plays won</th>
								<th className={classes.th}>Played</th>
								<th className={classes.th}>Total of games played</th>
							</tr>
						</thead>
						<tbody>
							{fullArray.map((p, i) => (
								<tr key={i}>
									<td>
										{/* {p.playerA.played === 'ROCK' && p.playerB.played === 'SCISSORS' && '🏆'} */}
										<span
										// style={{
										// 	backgroundColor:
										// 		p.playerA.played === 'ROCK' && p.playerB.played === 'SCISSORS'
										// 			? 'green'
										// 			: '#d3d3d3',
										// 	padding: '1.4px 4px',
										// 	borderRadius: '2.5px',
										// 	marginLeft: '4px',
										// }}
										>
											{/* {p.playerA.name} */}
											{p.name}
										</span>
									</td>
									<td className={classes.th}></td>
									<td className={classes.th}>
										{/* {p.playerA.played === 'ROCK' &&
										p.playerB.played === 'SCISSORS' &&
										'Has won with ROCK'} */}
										{p.played}
									</td>
									{/* amount && returnValues(p.playerA.name) */}
									<td className={classes.th}>
										<div
											style={{ backgroundColor: 'blue', padding: '10px 5px', width: 'fit-content' }}
											onClick={() => testing(p.name)}
										>
											Testing Player
										</div>
										<span>{final}</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default History;
