import { APP_TODO } from '../App/appConsts'

export const todoReducer = (state = { todo: 'TODO' }, action) => {
  switch (action.type) {
    case APP_TODO:
      console.log('todo reducer...')
      return {
        ...state,
        caption:
          'despite of being replaced, anotherReducer still can receive this action type, you will see',
      }
    default:
      return state
  }
}
