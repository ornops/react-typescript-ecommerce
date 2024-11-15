import React from 'react';
import './App.scss';
import ProductList from './components/Product List/product-list';
import Header from './components/Header/header';


function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
