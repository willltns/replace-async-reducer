import { APP_TODO } from '../App/appConsts'

export const todoReducer = (state = { todo: 'TODO' }, action) => {
  switch (action.type) {
    case APP_TODO:
      return { ...state, asy: action.payload }
    default:
      return state
  }
}
