import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../Assets/meals.jpg';

const Header = props => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<button>Cart</button>
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt='A table full of delicious food!'></img>
			</div>
		</React.Fragment>
	);
};

export default Header;
