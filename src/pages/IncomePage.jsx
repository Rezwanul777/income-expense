import React from 'react';
import IncomeForm from '../component/IncomeForm';
import TransactionList from '../component/TransactionList';
import NetBalance from '../component/NetBalance';
import ClearAll from '../component/ClearAll';

const IncomePage = () => {
    return (
        <div className="container mt-4">
        <h2>Income</h2>
        <IncomeForm />
        <NetBalance/>
        <ClearAll/>
        <TransactionList type="income" />
      </div>
    );
};

export default IncomePage;