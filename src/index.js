import './common/scss/base.scss'

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import React, { Suspense } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import configureStore from './configureStore'
import * as serviceWorker from './serviceWorker'

import App from './containers/App'
import Spinner from './components/Spinner'
import routes from './configureRoutes'
import combineReducers from './combReducers'

const history = createBrowserHistory()

const store = configureStore(history)

history.listen((location, action) => {
  console.log(location, action, routes, history)

  routes.forEach(route => {
    route.path === location.pathname &&
      store.replaceReducer(combineReducers(history, route.reducer))
  })
})

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Suspense fallback={Spinner}>
        <App />
      </Suspense>
    </ConnectedRouter>
  </Provider>,

  document.getElementById('root')
)

// If you want your App to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
