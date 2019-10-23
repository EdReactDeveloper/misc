import React from 'react';
import { addPostActionCreator, updateFieldActionCreator } from './reducer';

const componentName = ({state:{state}, dispatch} ) => {
	const textareaValue = React.createRef();
	let renderListOfMessages = state.list.map(item => <div key={item}>{item}</div>)
	
	const clickHandler = () => dispatch(addPostActionCreator(textareaValue.current.value));
	const changeHanldler = () => dispatch(updateFieldActionCreator(textareaValue.current.value));

	return (
		<div>
			<textarea
				onChange={changeHanldler}
				value={state.fieldValue}
				style={{ borderColor: state.color, outline: 'none' }}
				ref={textareaValue}
			/>
			<button onClick={clickHandler}>add content</button>
			<div>{renderListOfMessages}</div>
		</div>
	);
};

export default componentName;
