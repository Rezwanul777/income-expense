import React from 'react';
import IncomeForm from '../component/IncomeForm';
import TransactionList from '../component/TransactionList';
import NetBalance from '../component/NetBalance';

const IncomePage = () => {
    return (
        <div className="container mt-4">
        <h2>Income</h2>
        <IncomeForm />
        <NetBalance/>
        <TransactionList type="income" />
      </div>
    );
};

export default IncomePage;