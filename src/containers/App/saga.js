import { take, select } from 'redux-saga/effects'

import { APP_TODO } from './consts'

function* todoSaga() {
  while (true) {
    yield take(APP_TODO)

    const state = yield select(state => state.todo)

    console.log('saga congratulations!', state)
  }
}

export default todoSaga
