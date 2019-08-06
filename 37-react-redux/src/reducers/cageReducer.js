const initialState = {movies: []}

const cageReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'UPDATE_MOVIES':
      return {...state, movies: action.payload}
    default:
      return state;
  }

}

export default cageReducer;