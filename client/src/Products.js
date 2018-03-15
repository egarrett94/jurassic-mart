import React from 'react';
import IndivProduct from './IndivProduct';

const Products = () => {

	const productsList = [
		{
			name: 'stick',
			image: 'http://www.toyhalloffame.org/sites/www.toyhalloffame.org/files/toys/square/stick_0.png',
			desc: 'a stick'
		},
		{
			name: 'rock',
			image: 'https://images.pexels.com/photos/161702/harmony-relax-rock-moqui-161702.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
			desc: 'a rock'
		},
		{
			name: 'big stick',
			image: 'https://sep.yimg.com/ay/entirelypets/petstages-dogwood-stick-large-11.jpg',
			desc: 'a big stick'
		},
		{
			name: 'big rock',
			image: 'https://rereno2.files.wordpress.com/2014/09/boulder.jpg?w=640',
			desc: 'a big rock'
		},
		{
			name: 'biggest stick',
			image: 'https://assets2.roadtrippers.com/uploads/blog_post_section/attachment/image/160945/blog_post_section/attachment-image-f5746680-940d-4e3a-b612-c11d3686740c.jpg',
			desc: 'a biggest stick'
		},
		{
			name: 'biggest rock',
			image: 'https://www.accessfund.org/uploads/Devils-Tower.JPG',
			desc: 'a biggest rock'
		},
		{
			name: 'bone',
			image: 'https://jonesnaturalchews.com/wp-content/uploads/2017/11/JNC_JumboBone_sw.png',
			desc: 'a bone'
		},
		{
			name: 'meat',
			image: 'http://shop.lafrieda.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/p/r/prime_tbone_2in.jpg',
			desc: 'meat for meat eater'
		},
		{
			name: 'The Refined Canine Outdoor Dog Chaise Lounger',
			image: 'https://lh3.googleusercontent.com/proxy/30txdz8Wrf1u649yCtI0vSXsEpXQPeqF2PkonJhdQrZafXc37nAdOea3Mv4SA7oZc9FEQLKQ1J0u0_NJDMLUzw9x-8ZrCr9daY-HyBSWJ2_piisdYpfbxZ-0nCChMyBvozAWjlsXhgSvI5gIW5VVqRq9fDOmknEb2RIQgQm7j9as5m7jHg=s1000-pd-e365-rw-pc0xffffff',
			desc: 'Perfect for any deck or poolside patio, this outdoor chaise lounger allows your dog to sit comfortably outside. A weatherproof 3-inch outdoor cushion and a waterproof poly rattan construction highlight this dog lounger. The generous polyester fill of the cushion offers added comfort for your canine friends to rest on. The cushion is machine washable for easy cleaning. The espresso design is neutral and attractive, making it versatile enough to pair with most outdoor furniture. The smoke blends with more contemporary patio furniture. The overhang provides added shade on sunny days. Color Options: Espresso, Smoke Materials: Poly rattan Fill type: Polyester Large Dimensions: 28 inches L x 38 inches W x 35.5 inches H (for dogs 30-50 lbs.) X-Large Dimensions: 31.5 inches L 43 inches W x 41 inches H (for dogs 55-75 lbs.) Waterproof Machine washable'
		}
	]

	const allProducts = productsList.map( (product, index) => 
		<IndivProduct 
			key={index}
			name={product.name}
			image={product.image}
			desc={product.desc}
		 />
	)

	return(
		<div>
			<div class='row'>
				<div class='col s12 m12 l12'>
					<br/>
					<h1>Products</h1>
					<br/><br/><br/>
					<p className='shopkeep-text col s5 m5 l5 offset-s5 offset-m5 offset-l5'>Take a look at our wares.</p>
					<img className='goldblum' src='http://i.imgur.com/jbPGt.png' />
				</div>
			</div>
			<div class='row'>
				{allProducts}
			</div>
		</div>
	)

}


export default Products;
