import aspen from '../assets/aspen.jpeg';
import me from '../assets/me.jpeg';

const initialState = {
  secs: {
    1: {
      id: 1,
      name: 'David',
      votes: 0,
      image: me
    },        
    2: {
      id: 2,
      name: 'Aspen',
      votes: -9000,
      image: aspen
    }
  },
  message: 'hello'
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'INCREASE_VOTE':
      return {
        ...state,
        secs: {
          ...state.secs,
          [action.payload]: {
            ...state.secs[action.payload],
            votes: state.secs[action.payload]['votes'] + 1
          }
        }
      }
    case 'DECREASE_VOTE':
      return {
        ...state,
        secs: {
          ...state.secs,
          [action.payload]: {
            ...state.secs[action.payload],
            votes: state.secs[action.payload]['votes'] - 1
          }
        }
      }
    default:
      return state;
  }
}

export default reducer;