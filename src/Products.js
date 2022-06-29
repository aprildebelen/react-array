import React from 'react';
 
import {productsJson} from './ProductRecords';
const products = (JSON.parse(productsJson));

const format = (product)=>{
    return "Product id:" + product.id + " name: " + product.name + "type:" + product.type;
}

function Products(){
const listProducts = products.map((product)=> 
 <li key={"item id"}>{format( "JSON data type" )}</li>


return(
     <div>
     <ul>{listProducts}</ul>
     </div>
 );
}
export default Products;