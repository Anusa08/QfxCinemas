import {all} from 'redux-saga/effects';
import nowShowing from './NOwShowingSaga';
import upcoming from './ComingSoonSaga';
import cinemas from './CinemasSaga';

function* rootSaga() {
  yield all([nowShowing(), upcoming(), cinemas()]);
}

export default rootSaga;
