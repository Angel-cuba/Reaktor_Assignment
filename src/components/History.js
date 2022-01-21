import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useStyles } from './styles';

const History = ({ allData }) => {
	const classes = useStyles();
	console.log('all my data', allData);
	const [listA, setListA] = useState([]);
	const [listB, setListB] = useState([]);
	// console.log('lista A', listA);
	// console.log('lista B', listB);
	const [amount, setAmount] = useState();
	const [amountLength, setAmountLength] = useState([]);
	//console.log(amount);
	// console.log('final-----', amountLength);

	const [playersWon, setPlayersWon] = useState([]);
	console.log(playersWon);

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

	useLayoutEffect(() => {
		AmountList();
		testing();
	}, []);
	// useLayoutEffect(() => {
	// 	playersWon && console.log(playersWon);
	// }, []);
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
	const playsWon = () => {
		let a = 0;
		let b = 0;
		let insideArray = [];

		for (a; a < allData.map((value) => value.playerA).length; a++) {
			for (b; b < allData.map((value) => value.playerB).length; b++) {
				//De A vs B (piedra gana a tijera)
				allData[a].playerA['won'] = 0;
				allData[b].playerB['won'] = 0;

				if (allData[a].playerA.played === 'ROCK' && allData[b].playerB.played === 'SCISSORS') {
					setPlayersWon([
						...insideArray,
						insideArray.push(
							allData[a].playerA,
							(allData[a].playerA.won = allData[a].playerA.won + 1)
						),
					]);
					// console.log('Gana a con rok');
				}

				//De A vs B (tijera gana a papel)
				if (allData[a].playerA.played === 'SCISSORS' && allData[b].playerB.played === 'PAPER') {
					setPlayersWon([
						...insideArray,
						insideArray.push(
							allData[a].playerA,
							(allData[a].playerA.won = allData[a].playerA.won + 1)
						),
					]);
					//console.log('Gana a con tijera');
				}

				//De A vs B (papel gana a piedra)
				if (allData[a].playerA.played === 'PAPER' && allData[b].playerB.played === 'ROCK') {
					setPlayersWon([
						...insideArray,
						insideArray.push(
							allData[a].playerA,
							(allData[a].playerA.won = allData[a].playerA.won + 1)
						),
					]);
					//console.log('Gana a con paper');
				}

				//empate
				// if (allData[a].playerA.played === allData[b].playerB.played) {
				// 	// return;
				// 	console.log('ha sido empate');
				// }
				//De B vs A (piedra gana a tijera)
				if (allData[a].playerA.played === 'SCISSORS' && allData[b].playerB.played === 'ROCK') {
					setPlayersWon([
						...insideArray,
						insideArray.push(
							allData[b].playerB,
							(allData[b].playerB.won = allData[b].playerB.won + 1)
						),
					]);
					//	console.log('Gana b con rock');
				}

				//De B vs A (tijera gana a papel)
				if (allData[a].playerA.played === 'PAPER' && allData[b].playerB.played === 'SCISSORS') {
					setPlayersWon([
						...insideArray,
						insideArray.push(
							allData[b].playerB,
							(allData[b].playerB.won = allData[b].playerB.won + 1)
						),
					]);
					// console.log('gana b con tijera');
				}

				//De B vs A (papel gana a piedra)
				if (allData[a].playerA.played === 'ROCK' && allData[b].playerB.played === 'PAPER') {
					setPlayersWon([
						...insideArray,
						insideArray.push(
							allData[b].playerB,
							(allData[b].playerB.won = allData[b].playerB.won + 1)
						),
					]);
					//console.log('gana b con paper');
				}
			}
		}
	};

	//Cheque la cantidad de veces que ha judgado
	const testing = (value) => {
		let arr = [];
		for (let a in amount) {
			for (let i = 0; i < amount.length; i++) {
				if (amount[i] === value) {
					arr.push([...amount, ...amount[a].length]);
				}
			}
			amount[value] && setAmountLength([value, amount[value].length]);
			// alert(
			// 	value +
			// 		' has played ' +
			// 		amount[value].length +
			// 		(amount[value].length === 1 ? ' time' : ' times')
			//);
			return;
		}
	};

	return (
		<>
			<div style={{ position: 'relative', width: '100%', height: '100%' }}>
				<div onClick={() => playsWon()}>Click here to</div>
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
							{/*{amount.map((p, i) => ( */}

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
									<td className={classes.thTotal}>
										<div className={classes.clickTotal} onClick={() => testing(p.name)}>
											Click to know...
										</div>
										<span>{p.name === amountLength[0] ? amountLength[1] : ''}</span>
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
