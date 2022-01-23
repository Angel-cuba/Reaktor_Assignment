import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useStyles } from './styles';

const History = ({ allData }) => {
	const classes = useStyles();

	const [listA, setListA] = useState([]);
	const [listB, setListB] = useState([]);
	const [amount, setAmount] = useState();
	const [amountLength, setAmountLength] = useState([]);
	const [playersWon, setPlayersWon] = useState([]);
	const [fullArray, setFullArray] = useState([]);

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
		setLengthValue();
		playsWon();
		// AmountOfPlays();
	}, []);

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
	//Running all players to find winners
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
				if (
					allData[a].playerA.played === allData[b].playerB.played ||
					allData[b].playerB.played === allData[a].playerA.played
				) {
					// return;
					console.log('ha sido empate');
				}
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
		return insideArray;
	};

	//Cheque la cantidad de veces que ha judgado
	const setLengthValue = (value) => {
		let arr = [];
		for (let a in amount) {
			for (let i = 0; i < amount.length; i++) {
				if (amount[i] === value) {
					arr.push([...amount, ...amount[a].length]);
				}
			}
			amount[value] && setAmountLength([value, amount[value].length]);
			return;
		}
	};

	const lastSelection = (value) => {
		let arr = [];
		let count = 0;

		for (count; count < playersWon.length; count++) {
			if (playersWon[count].name === value) {
				// arr.push([...selections, playersWon[count].name, playersWon[count] && playersWon[count]]);
				if (playersWon[count].played === 'ROCK') {
					arr.push([
						...arr,
						playersWon[count].name,
						playersWon[count].played !== 'undefined' && playersWon[count].played,
					]);
				}
				if (playersWon[count].played === 'SCISSORS') {
					arr.push([
						...arr,
						playersWon[count].name,
						playersWon[count].played !== 'undefined' && playersWon[count].played,
					]);
				}
				if (playersWon[count].played === 'PAPER') {
					arr.push([
						...arr,
						playersWon[count].name,
						playersWon[count].played !== 'undefined' && playersWon[count].played,
					]);
				}
			}
		}
		arr && arr.length
			? alert('Has won ' + arr.length + ' games. And the most played hand is ' + arr[0][1])
			: alert('No victories. Nothing to show for this player.');
		return arr;
	};

	return (
		<>
			<div style={{ position: 'relative', width: '100%', height: '100%' }}>
				<table style={{ borderSpacing: '1px' }}>
					<thead>
						<tr>
							<th className={classes.th}>Name</th>
							<th className={classes.th}>Plays won and play type</th>
							<th className={classes.th}>Last played</th>
							<th className={classes.th}>Total of games played</th>
						</tr>
					</thead>
					<tbody>
						{fullArray.map((p, i) => (
							<tr key={i}>
								<td>{p.name}</td>
								<td className={classes.tdClickMe}>
									<div className={classes.tdClicks} onClick={() => lastSelection(p.name)}>
										Click me...!
									</div>
								</td>
								<td className={classes.td}>{p.played}</td>
								<td className={classes.thTotal}>
									<div className={classes.clickTotal} onClick={() => setLengthValue(p.name)}>
										Click to know...
									</div>
									<span>{p.name === amountLength[0] ? amountLength[1] : ''}</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default History;
