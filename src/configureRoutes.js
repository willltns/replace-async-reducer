import { lazy } from 'react'

import { todoReducer } from './containers/Todo/todoReducer'
import { anotherReducer } from './containers/Another/anotherReducer'

const Todo = lazy(() => import('./containers/Todo'))
const Another = lazy(() => import('./containers/Another'))
const Dnd = lazy(() => import('./containers/Dnd/Dnd'))

const configureRoutes = [
  {
    path: '/todo',
    component: Todo,
    reducer: { todo: todoReducer },
  },
  {
    path: '/another',
    component: Another,
    reducer: { another: anotherReducer },
  },
  {
    path: '/dnd',
    component: Dnd,
  },
]

export default configureRoutes
