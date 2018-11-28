import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { appReducer } from './containers/App/appReducer'

export default (history, asyncReducer) =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer,
    ...asyncReducer,
  })
