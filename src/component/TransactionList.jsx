import React from 'react';

const TransactionList = ({type}) => {
    const transactions =
    type === 'income'
      ? JSON.parse(localStorage.getItem('incomes')) || []
      : JSON.parse(localStorage.getItem('expenses')) || [];

  return (
    <div className="mt-4">
      <h3>{type === 'income' ? 'Income' : 'Expense'} Transactions</h3>
      {transactions.length === 0 ? (
        <p>No {type === 'income' ? 'income' : 'expense'} transactions yet.</p>
      ) : (
        <ul className="list-group">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{transaction.description}</span>
              <span>${transaction.amount}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;