import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../Assets/meals.jpg';
import HeaderCardButton from './HeaderCartButton';

const Header = props => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCardButton />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt='A table full of delicious food!'></img>
			</div>
		</React.Fragment>
	);
};

export default Header;