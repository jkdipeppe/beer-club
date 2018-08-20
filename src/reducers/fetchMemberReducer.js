export default function fetchMemberReducer( state = {currMember: {}}, action) {
  switch(action.type) {
    case 'CURRENT_MEMBER':
      fetch('http://localhost3000/member')
        .then(resp => resp.json())
        .then(json => {
          state = json
        })
      return state

    default:
      return state;
  }
}
