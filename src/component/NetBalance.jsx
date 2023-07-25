import React from 'react';

const NetBalance = () => {
    
        const incomes = JSON.parse(localStorage.getItem('incomes')) || [];
  const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const netBalance = totalIncome - totalExpense;

  return (
    <div className="my-3">
      <h4>Net Balance: ${netBalance.toFixed(2)}</h4>
    </div>
  );
}

export default NetBalance;