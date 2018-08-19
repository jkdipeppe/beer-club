export default function beerListCountReducer(state = {
  beers: []
}, action) {
  switch(action.type) {

    case 'INCREASE_COUNT':
      return state.beers.concat(state.beers.length + 1);
    case 'DECREASE_COUNT':
      return state.beers.concat(state.beers.length - 1);

    default:
      return state;
  }
}
