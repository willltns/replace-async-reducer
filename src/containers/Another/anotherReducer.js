import { APP_TODO } from '../App/consts'

export const anotherReducer = (state = { another: 'ANOTHER' }, action) => {
  switch (action.type) {
    case APP_TODO:
      console.log('reducer congratulations!')
      return state
    default:
      return state
  }
}