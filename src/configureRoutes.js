import { lazy } from 'react'

import injectAsyncReducer from './injectAsyncReducer'

import { todoReducer } from './containers/Todo/todoReducer'
import { anotherReducer } from './containers/Another/anotherReducer'

const Todo = lazy(() => import('./containers/Todo/Todo'))
const Another = lazy(() => import('./containers/Another/Another'))
const Dnd = lazy(() => import('./containers/Dnd/Dnd'))

const injectReducer = (store, key = '', reducer = {}) => () => {
  const storeObj = store.getState()

  // if store has the reducer, then pass
  // if do not have, then replace
  !(key in storeObj) && store.replaceReducer(injectAsyncReducer({ [key]: reducer }))
}

const configureRoutes = store => {
  return [
    {
      path: '/todo',
      renderConfig: {
        component: Todo,
        injectReducer: injectReducer(store, 'todo', todoReducer),
      },
      routes: [
        {
          path: '/todo/aa',
          renderConfig: {
            component: Another,
          },
        },
      ],
    },
    {
      path: '/another',
      renderConfig: {
        component: Another,
        injectReducer: injectReducer(store, 'another', anotherReducer),
      },
    },
    {
      path: '/dnd', // do not have reducer
      renderConfig: {
        component: Dnd,
        injectReducer: injectReducer(store, null, null),
      },
    },
  ]
}

export default configureRoutes
