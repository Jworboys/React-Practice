import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from '../NewExpense/ExpensesFilter';

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState(2020);

	const updateExpenseFilterHandler = selectedYear => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					onExpenseFilterChange={updateExpenseFilterHandler}
				></ExpensesFilter>
				<ExpensesChart expenses={filteredExpenses}></ExpensesChart>
				<ExpensesList items={filteredExpenses}></ExpensesList>
			</Card>
		</div>
	);
};

export default Expenses;
