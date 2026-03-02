import React from 'react';
// Hum yahan BrowserRouter nahi laga rahe taaki "Double Router" ka conflict na ho
import { Routes, Route } from 'react-router-dom'; 
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

const App = () => {
  return (
    // Yahan koi extra <li>, <nav> ya faltu tags nahi hone chahiye!
    <div>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </div>
  );
};

export default App;