import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { compose, createStore, applyMiddleware } from 'redux'

import sagas from './combineSagas'
import injectAsyncReducer from './injectAsyncReducer'

export default history => {
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose

  const sagaMiddleware = createSagaMiddleware()

  const middlewareChain = applyMiddleware(routerMiddleware(history), sagaMiddleware)

  const reducer = injectAsyncReducer()
  const enhancer = composeEnhancers(middlewareChain)

  const store = createStore(reducer, enhancer)

  sagaMiddleware.run(...sagas)

  return store
}
