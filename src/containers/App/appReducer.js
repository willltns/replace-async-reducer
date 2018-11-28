import { APP_TODO } from './consts'

export const appReducer = (state = { app: 'APP' }, action) => {
  switch (action.type) {
    case APP_TODO:
      console.log('reducer congratulations!')
      return state
    default:
      return state
  }
}
