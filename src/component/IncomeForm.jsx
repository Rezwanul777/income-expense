import React, { useState } from 'react';

const IncomeForm = () => {

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
      
          // Create a new income object
          const newIncome = {
            id: new Date().getTime().toString(),
            description,
            amount: parseFloat(amount),
          };
      
          // Store the income in local storage
          const existingIncomes = JSON.parse(localStorage.getItem('incomes')) || [];
          const updatedIncomes = [...existingIncomes, newIncome];
          localStorage.setItem('incomes', JSON.stringify(updatedIncomes));
      
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
              Add Income
            </button>
          </form>
        );
      }
    


export default IncomeForm;