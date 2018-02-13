import React from 'react';

const Item = ({item}) => {
console.log('item', item);
  return(
    <div className="collection-item">
      <div className="row">
        <div className="col s8">{JSON.stringify(item)}</div>
        <div className="col s2"></div>
        <div className="col s2"></div>
      </div>
    </div>
  )
}

export default Item;
