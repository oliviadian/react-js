import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
           <Product judul="Charger HP" harga="Rp.10.000" />
           <Product judul="Charger Laptop" harga="Rp.100.000" />
           <Product judul="Charger Motor" harga="Rp.1000.000"/>
          <Product judul="Charger Motor" harga="Rp.1000.000" />
        </header>
      </div>
    );
  }
}

export default App;

