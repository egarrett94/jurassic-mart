import React from 'react';
import IndivProduct from './IndivProduct';

const Products = () => {

	return(
		<div>
			<div class='row'>
				<div class='col s12 m12 l12'>
					<h1>Products</h1>
				</div>
			</div>
			<div class='row'>	
				<IndivProduct />
			</div>

		</div>
	)

}


export default Products;