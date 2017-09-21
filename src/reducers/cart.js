// this reducer handles the action of someone adding an item to the cart. It adds whatever is in the payload inot the state of the shopping cart.

// in redux, you always need a default state:

export default(state = [], payload) => {
  switch(payload.type){
    case 'add':
    // return the original state plus the new item:
      return [...state, payload.item];
    default:
    return state;
  }
};
