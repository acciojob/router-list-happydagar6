import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

const App = () => {
  return (
    // Is <BrowserRouter> ke bina Routes kaam nahi karenge
    <BrowserRouter>
      <div id="main">
        <Routes>
          {/* Homepage Route */}
          <Route path="/" element={<ItemList />} />
          
          {/* Dynamic Detail Route */}
          <Route path="/items/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;