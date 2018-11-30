import { take, select } from 'redux-saga/effects'

import { APP_TODO } from './appConsts'

function* todoSaga() {
  while (true) {
    yield take(APP_TODO)

    const state = yield select(state => state.todo)

    console.log('todo saga...', state)
  }
}

export default todoSaga
