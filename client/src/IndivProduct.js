import React, {Component} from 'react';

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

}

export default IndivProduct;
