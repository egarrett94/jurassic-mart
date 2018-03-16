import React from 'react';
import Nav from './Nav';

// https://cdn.movieweb.com/img.news.tops/NE3SJdAlaqpY6b_1_b/Jurassic-Park-Jeff-Goldblum-Explains-Shirtless-Scene.jpg

const Home = () => {
	return(
		<div class='opener'>
			<img class='responsive-img z-depth-5' src='https://wallpapers.walldevil.com/wallpapers/a20/preview/dinosaur-pet-bone-caveman.jpg'/>
			<div class='row'>
				<div class='text col s8 m8 l8 offset-s2 offset-m2 offset-l2 z-depth-5'> 
					<p>We troglodytes are no match for those big scary scalebeasts outside. Lucky for you, we've made getting your dino pet's supplies much easier and safer.</p>
				</div>
			</div>	
			<div class='row'>
				<div class='shop-now col s2 m2 l2 offset-s5 offset-m5 offset-l5'>
					<a href='/Products' class="waves-effect waves-light btn orange darken-1 z-depth-5">Shop Now</a>
				</div>
			</div>
		</div>
	)
}

export default Home;