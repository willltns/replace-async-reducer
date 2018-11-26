import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { todoReducer } from './containers/App/reducer'

export default history =>
  combineReducers({
    router: connectRouter(history),
    todo: todoReducer,
  })
