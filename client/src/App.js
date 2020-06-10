import React from 'react';
import './App.scss';
import NewsList from './components/NewsList';
import VoteChart from './components/VoteChart';

function App({ initData }) {
	const votes = [];
	initData.forEach((obj) => {
		const { objectID, points } = obj;
		votes.push({ objectID, points });
	});

	return (
		<>
			<NewsList initData={initData} />
			<VoteChart data={votes} />
		</>
	)
}

export default App;
