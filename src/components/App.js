import React from 'react';
import ProductList from './ProductList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Shopping Cart Example</h2>
        <hr/>
        <h3>Product</h3>
          <ProductList />
        <hr/>
        <h3>Your Cart</h3>
      </header>
    </div>
  );
}

export default App;
