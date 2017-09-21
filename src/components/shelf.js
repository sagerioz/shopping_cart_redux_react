// displays a list of items on the 'shelp' for shopping
import React, { Component } from 'react';

class Shelf extends Component {
  constructor(props){
    super(props);
    this.onClickAdd = this.onClickAdd.bind(this);
    this.state = {
      shelfItems : [
        'shampoo',
        'soap',
        'sponge',
        'paper towels'
      ]
    }
  }
  onClickAdd(item){
      this.props.addItem(item);
  }
  render() {
    // go thru the state, list item and a button, and a unique id for React to differentiate between the items. key={idx} is assigning properties to key.
    const shelfItems = this.state.shelfItems.map((item, idx) => {
      return <li key={idx}><button onClick={() => this.onClickAdd(item)}>[+]</button>{item}</li>
    })
    return (
      <div>
          <h2>Shelf</h2>
          <ul>
            { shelfItems }
          </ul>
      </div>
    );
  }
}

export default Shelf;
