import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    // Hooks start with use, and must be called within 
    // React component functions. 
    // First value in the array is a value to descrbie what is changing
    // Second is the function being returned that can be used to change that value.
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!!!');
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;