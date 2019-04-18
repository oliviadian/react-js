import React, { Component } from 'react';
import './Product.css';
import logo from './logo.svg';
import './App.css';

class Product extends React.Component {
  render() {
    return (
      <div className="box">
        <img src={logo} className="App-logo" alt="logo" />
          <h1 className="ungu">{this.props.judul}</h1>
          <h3 className="orange">{this.props.harga}</h3>
      </div>
    );
  }
}

export default Product;
