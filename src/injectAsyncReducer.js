import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { history } from './configureHistory'
import { appReducer } from './containers/App/appReducer'

export default asyncReducer => {
  console.log(asyncReducer)

  return combineReducers({
    router: connectRouter(history),
    app: appReducer,
    ...asyncReducer,
  })
}
