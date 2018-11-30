import { APP_TODO } from '../App/appConsts'

export const anotherReducer = (state = { another: 'ANOTHER' }, action) => {
  switch (action.type) {
    case APP_TODO:
      console.log('another reducer...')
      return {
        ...state,
        caption:
          'when dispatching (APP_TODO) in Todo component, it still receives this action type',
      }
    default:
      return state
  }
}
