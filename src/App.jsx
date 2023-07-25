import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/income" element={<IncomePage/>}/>
        <Route  path="/expense" element={<ExpensePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;