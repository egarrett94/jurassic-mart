import React from 'react';

// https://cdn.movieweb.com/img.news.tops/NE3SJdAlaqpY6b_1_b/Jurassic-Park-Jeff-Goldblum-Explains-Shirtless-Scene.jpg

const Home = () => {
	return(
		<div>
		<div class='row'>
			<div class='col s12 m12 l12'> 
				<img class='responsive-img' src='http://home.bt.com/images/which-dinosaur-would-have-made-the-best-pet-we-asked-an-expert-136410827166703901-161026104028.jpg'/>
			</div>
		</div>
		<div class='row'>
			<div class='col s8 m8 l8 offset-s2 offset-m2 offset-l2'> 
				<p>We troglodytes are no match for those big scary scalebeasts outside. We've made getting your pet's supplies much easier and safer.</p>
			</div>
		</div>	
		<div class='row'>
			<div class='col s2 m2 l2 offset-s5 offset-m5 offset-l5'>
				<a class="waves-effect waves-light btn">Shop Now</a>
			</div>
		</div>
		</div>
	)
}

export default Home;