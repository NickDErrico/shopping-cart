import React from 'react';
import Item from './Item';

const CartItems = ({items}) => {
  console.log('items', items)
  let listOfItems = items.map(item => <Item key={item.id} item={item}/>)
  console.log('listOfItems', listOfItems);
  return(
  <div className="container">
    <h1>Items</h1>
    <div className="collection">
      <div className="collection-item row grey lighten-3">
        <div className="col s8">Product</div>
        <div className="col s2">Price</div>
        <div className="col s2">Quantity</div>
      </div>
      {listOfItems}
    </div>
  </div>
  )
}

export default CartItems;
