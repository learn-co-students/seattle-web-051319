import { combineReducers } from 'redux';
import secs from './secReducer';
import movies from './cageReducer';

export default combineReducers({
  secs,
  movies
})

// export default rootReducer;