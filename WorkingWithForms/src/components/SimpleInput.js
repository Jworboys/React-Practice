import React, { useRef, useState } from 'react';

const SimpleInput = props => {
	const nameInputRef = useRef();
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

	const nameInputChangeHandler = event => {
		setEnteredName(event.target.value);
	};

	const formSubmissionHandler = event => {
		event.preventDefault();

		if (enteredName.trim() === '') {
			setEnteredNameIsValid(false);
			return;
		}

		setEnteredNameIsValid(true);

		console.log(enteredName);
		const enteredValue = nameInputRef.current.value;
		console.log(enteredValue);

		//nameInputRef.current.value = ''; => Not ideal dont manipulate the dom leave that to React.
		setEnteredName('');
	};

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className='form-control'>
				<label htmlFor='name'>Your Name</label>
				<input
					ref={nameInputRef}
					type='text'
					id='name'
					onInput={nameInputChangeHandler}
					value={enteredName}
				/>
				<p>Name must not be blank.</p>
			</div>
			<div className='form-actions'>
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
