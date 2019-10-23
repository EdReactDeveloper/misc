import React from 'react';
import './App.css';
import List from './containers/ListContainer';
import { Provider } from 'react-redux';
import store from './store';
import Array from './components/SortedArray';
import Object from './components/ObjectMutator'
import TemperatureContainer from './containers/Temperature'; 
import TicTacToe from './components/TicTacToe'; 
import MouseTracker from './components/RenderProps'
import Recursion from './components/recursion'; 
function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				{/* <List /> */}
				{/* <Array/> */}
				<Recursion />
				{/* <Object /> */}
				{/* <TemperatureContainer /> */}
				{/* <TicTacToe /> */}
				{/* <MouseTracker /> */}
			</Provider>
		</div>
	);
}

export default App;
