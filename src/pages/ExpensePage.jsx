import React from 'react';
import TransactionList from '../component/TransactionList';
import ExpenseForm from '../component/ExpenseForm';
import NetBalance from '../component/NetBalance';
import ClearAll from '../component/ClearAll';

const ExpensePage = () => {
    return (
    <div className="container mt-4">
      <h2>Expense</h2>
      <ExpenseForm/>
      <NetBalance/>
      <ClearAll/>
      <TransactionList type="expense" />
    </div>
    );
};

export default ExpensePage;