// actions are simple. They just tell react what to do.
// this file will only do one thing, create the payload for the reducer.
// clicking on a button in the UI will call this function. Then this function goes to reducer, and based on 'type' will execute the proper branch of the program.

export const addToCart = (item) => {
  console.log("adding item", item);
  // returns an object:
  return {
    type: 'add',
    item
  };
}
