import { APP_TODO } from './appConsts'

export const appReducer = (state = { app: 'APP' }, action) => {
  switch (action.type) {
    case APP_TODO:
      return state
    default:
      return state
  }
}
