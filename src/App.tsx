import React, { useState } from "react";

import Search from './components/Search'
import Product from './components/Products'
import "./App.css";

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];
 function App() {
  const [filterText, setFilterText] = useState<string>('');
  const [isInStock, setIsInStock] = useState<boolean>(false);
  return (<div className="App">
     <Search
        filterText={filterText} 
        isInStock={isInStock} 
        onFilterTextChange={setFilterText} 
        onInStockChange={setIsInStock} />

<Product
        products={PRODUCTS} 
        filterText={filterText}
        isInStock={isInStock} />
       
    
     </div>)
}

export default App;
