import {combineReducers} from 'redux';
import nowShowingReducer from './NowShowingReducer';
import upcomingReducer from './ComingSoonReducer';
import cinemaReducers from './CinemasReducer';

export default combineReducers({
  nowShowing: nowShowingReducer,
  upcoming: upcomingReducer,
  cinema: cinemaReducers,
});
