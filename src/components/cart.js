// this is a container component. Does the heavy lifting of the data.
// read more about redux http://redux.js.org/
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CartActions from '../actions/cart';
import Shelf from './shelf';

class Cart extends Component {
  constructor(props){
    super(props);
  }
  render() {
    // const CartItems = this.props.cart.map((item, i, arr) => {
    //   console.log(item, i ,arr);
    //   return <li key={i}>{item}</li>
    // })
    let counts = {}
    const CartItemsObj = this.props.cart.forEach((x) => { counts[x] = (counts[x] || 0) + 1});
    let arr = function(counts){
      return Object.keys(counts).map(function (key) {
        console.log(arr);
        return counts[key];
      });
    }
    const CartItems = this.props.arr.map((item, i, arr) => {
      console.log(item, i ,arr);
      return <li key={i}>{item}</li>
    })
    return (
      <div className="Cart">
          <Shelf addItem={this.props.action.addToCart} />
          <h2>Shopping Bag</h2>
          {CartItems}
      </div>
    );
  }
}

// these functions are standard to redux:
// translates the state into props so you can pass it around

function mapStateToProps(state, prop){
  return {
    //
    cart: state.cart
  }
}

// makes the dispatchers available to the Component
// sets up the data flow

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(CartActions, dispatch)
  }
}
// instead of the usual 'export default Cart;' =>
// use the connect utility to connect everything together:

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
