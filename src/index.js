import './common/scss/base.scss'

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import React, { Suspense } from 'react'
import { history } from './configureHistory'
import { ConnectedRouter } from 'connected-react-router'

import configureStore from './configureStore'
import configureRoutes from './configureRoutes'
import * as serviceWorker from './serviceWorker'

import App from './containers/App/App'
import Spinner from './components/Spinner'

const store = configureStore(history)

export const routes = configureRoutes(store)

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
