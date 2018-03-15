import React from 'react';

const IndivProduct = () => {

	return(
		
        <div class="col s4 m4 l4">
          <div class="card small">
            <div class="card-image">
              <img src="http://www.placekitten.com/g/150/150" />
              <span class="card-title">Kitty</span>
            </div>
            <div class="card-content">
              <p>lorem as fuck</p>
            </div>
            <div class="card-action">
              <a href="#" value='{this.props.product.name}'>Add To Cart</a>
            </div>
          </div>
        </div>
	)

}

export default IndivProduct; 