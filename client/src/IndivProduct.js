import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD

const IndivProduct = (props) => {

=======
const IndivProduct = (props) => {
>>>>>>> 5c360d839becc494626114e410075d9bf1419366
=======

const IndivProduct = (props) => {

>>>>>>> 594d4400573c33c50772d92e59d896861a9853cd

  return (
		<div class="col s4 m4 l4">
      <div class="card medium">
        <div class="card-image">
          <img src={props.image} />
          <span class="card-title">{props.name}</span>
        </div>
        <div class="card-content">
          <h6> Product Description: </h6>
          <p>{props.desc}</p>
          <p>Price: ${props.price}</p>
        </div>
        <div class="card-action">
          <input type='submit' value='Add To Cart' onClick={() => props.onAddCartItem(props.product)}/>
        </div>
      </div>
    </div>
	)
}

export default IndivProduct;
