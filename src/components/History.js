import React, { useState, useEffect } from 'react';

const History = ({ allData }) => {
	console.log(allData);
	const [byName, setByName] = useState([]);
	console.log('----', byName);

	useEffect(() => {
		myArrays();
	}, []);

	const myArrays = () => {
		for (
			var i = 0;
			i <
			allData.map((value) => value.playerA.name).concat(allData.map((value) => value.playerB.name))
				.length;
			i++
		) {
			for (
				var j = 0;
				j <
				allData
					.map((value) => value.playerA.name)
					.concat(allData.map((value) => value.playerB.name)).length;
				j++
			) {
				if (
					allData
						.map((value) => value.playerA.name)
						.concat(allData.map((value) => value.playerB.name))[i] ===
					allData
						.map((value) => value.playerA.name)
						.concat(allData.map((value) => value.playerB.name))[j]
				) {
					allData
						.map((value) => value.playerA.name)
						.concat(allData.map((value) => value.playerB.name))
						.splice(j, 1);
				}
			}
		}
		return setByName([
			...byName,
			...allData
				.map((value) => value.playerA.name)
				.concat(allData.map((value) => value.playerB.name)),
		]);
	};

	return (
		<>
			<div>HHHHH</div>
			<div>
				{allData && allData.map((data, index) => <HistoryComponent data={data} key={index} />)}
			</div>
		</>
	);
};

export default History;

const HistoryComponent = ({ data }) => {
	return (
		<>
			<h4>{data.playerA.name}</h4>
		</>
	);
};

// const Test = ({ hello }) => {
// 	console.log(hello);
// 	let array1 = [];
// 	let array2 = [hello];
// 	let array = [...array1, ...hello];
// 	console.log(array);
// 	return <>{hello[0]}-|-</>;
// };
