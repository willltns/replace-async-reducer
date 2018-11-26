import { lazy } from 'react'

const Todo = lazy(() => import('./containers/Todo'))
const Another = lazy(() => import('./containers/Another'))

const configureRoutes = [
  {
    path: '/todo',
    component: Todo,
  },
  {
    path: '/another',
    component: Another,
  },
]

export default configureRoutes
