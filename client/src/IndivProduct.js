import React from 'react';

<<<<<<< HEAD
const IndivProduct = (props) => {
=======
class IndivProduct extends Component {


  constructor(props) {
		super(props)
		this.state = {
			cart: []
		}

	}

  handleAddToCartClick = (value) => {

  }

  render(){
  	return(

          <div class="col s4 m4 l4">
            <div class="card medium">
              <div class="card-image">
                <img src={this.props.image} />
                <span class="card-title">{this.props.name}</span>
              </div>
              <div class="card-content">
                <h6> Product Description: </h6>
                <p>{this.props.desc}</p>
                <p>Price: ${this.props.price}</p>
              </div>
              <div class="card-action">
                <input type='button' value="Add to Cart" onClick={this.props.name} />
              </div>
            </div>
          </div>
  	)
  }
>>>>>>> 55cc6fcbac6461425c6f2be15f7fa1ee5a72646d

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
          <input type='submit' value='Add To Cart' onClick={props.onAddCartItem}/>
        </div>
      </div>
    </div>
	)
}

export default IndivProduct;
