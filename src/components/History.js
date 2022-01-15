import React, { useState } from 'react';

const History = ({ allData }) => {
	console.log(allData);
	const [byName, setByName] = useState([]);
	console.log('----', byName);

	const handler = () => {
		setByName([...byName, allData.map((value) => value.playerA.name)]);
	};

	return (
		<>
			<div onClick={handler}>HHHHH</div>
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
