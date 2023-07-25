import React from 'react';

const ClearAll = () => {
    const handleClearAll = (e) => {
        e.preventDefault();
        localStorage.removeItem('incomes');
        localStorage.removeItem('expenses');
        window.location.reload(); // Refresh the page to update the transaction lists
      };
    
      return (
        <button className="btn btn-danger" onClick={handleClearAll}>
          Clear All
        </button>
      );
}

export default ClearAll;