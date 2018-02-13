import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import CartItems from './components/CartItems';

let applicationState = {
  copyright: `&copy;`,
  items: [
    { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
    { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
    { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
  ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <CartHeader />
      <CartItems items={applicationState.items}/>
      <CartFooter copyright = {applicationState.copyright}/>
      </div>
    );
  }
}

export default App;
