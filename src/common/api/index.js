import axios from '../util/axios'

export const posts = userId =>
  axios.get('https://jsonplaceholder.typicode.com/posts', { params: { userId } })
