import React, { useState } from 'react';

const ExpenseForm = () => {
    const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) {
      alert('Please enter both description and amount.');
      return;
    }

    // Create a new expense object
    const newExpense = {
      id: new Date().getTime().toString(),
      description,
      amount: parseFloat(amount),
    };

    // Store the expense in local storage
    const existingExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const updatedExpenses = [...existingExpenses, newExpense];
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));

    // Clear form fields after submission
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="number"
          className="form-control"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;