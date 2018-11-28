import { take, select, put } from 'redux-saga/effects'

import { APP_TODO } from './appConsts'

function* todoSaga() {
  while (true) {
    const action = yield take(APP_TODO)
    console.log(action)

    const state = yield select(state => state.todo)

    console.log('saga congratulations!', state)
  }
}

export default todoSaga
