import React, { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const plusCount = () => {
		setCount(count + 1);
	}
	return (
		<div className="App">
			<header className="App-header">
				<h4>React SSR!!!</h4>
				<button onClick={plusCount}>Count is {count}</button>
			</header>
		</div>
	);
}

export default App;
