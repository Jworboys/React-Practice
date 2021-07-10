import { useRef, useState } from 'react';

const SimpleInput = props => {
	const [enteredName, setEnteredName] = useState('');

	const nameInputChangeHandler = event => {
		setEnteredName(event.target.value);
	};

	const formSubmissionHandler = event => {
		event.preventDefault();
	};

	return (
		<form onsubmit={formSubmissionHandler}>
			<div className='form-control'>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' onInput={nameInputChangeHandler} />
			</div>
			<div className='form-actions'>
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
