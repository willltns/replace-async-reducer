import { all, fork } from 'redux-saga/effects'

import todoSaga from './containers/App/saga'

export default function* () {
  yield all([
    fork(todoSaga),
    // ...
  ])
}
