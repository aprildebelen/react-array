import React from 'react';
function Product(props) {
  return (
    <li key={props.id}>
      {'product'}
      {props.id} {props.name} {props.type}
    </li>
  );
}
export default Product;
