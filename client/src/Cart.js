import React from 'react';

const Cart = (props) => {
	let cartItems = props.cartItems.map((item, index) => {
		return (
			<div key={index} className='col s4 m4 l4 offset-s2 offset-m2 offset-l2'>
		            <div class="card small">
		              <div class="card-image">
		                <img src={item.image} />
		                <span class="card-title">{item.name}</span>
		              </div>
		              <div class="card-content">
		                <h6> Product Description: </h6>
		                <p>{item.desc}</p>
		                <p>Price: ${item.price}</p>
		              </div>
		            </div>
			</div>
		)
	})
	return(
		<div>
			<div className='row cart'>
				{cartItems}
				<div className='col s4 m4 l4 total'>
					<img className='responsive-img dino' src='https://vignette.wikia.nocookie.net/jurassicfightclub/images/c/cd/Stegosaurus.png/revision/latest?cb=20121003014145' />
					<h1>Total:</h1>
					<p>item1.price + item2.price = whatever</p>

				</div>

			</div>

		</div>
	)
}

export default Cart;