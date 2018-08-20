export default function beerListCountReducer(state = {
  beers: []
}, action) {
  switch(action.type) {

    case 'INCREASE_COUNT':
      return Object.assign({}, state, { beers: state.beers + 1});
    case 'DECREASE_COUNT':
      return Object.assign({}, state, { beers: state.beers - 1});

    default:
      return state;
  }
}
