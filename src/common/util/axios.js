import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = '/'

axios.defaults.timeout = 10000

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'

// data is only applicable for request methods 'PUT', 'POST', and 'PATCH' +
axios.defaults.transformRequest = (data, header) => {
  // Do something before request data & header is sent
  // console.log('defaults.transformRequest', data, header);

  // const token = localStorage.getItem('token')
  // token && (header.token = token);

  return qs.stringify(data)
}

// Add a request interceptor -
axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    // console.log('interceptors.request', config);

    return config
  },
  error => {
    // Do something with request error
    //console.log('interceptors.request.error', error);

    return Promise.reject(error)
  }
)

/* -------------------------------------------------------------------------- */

axios.defaults.transformResponse = data => {
  return JSON.parse(data)
  // throw new Error('some error throwed to response interceptor to catch')
  // return Promise.reject('some error rejected to UI to catch')
}

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    // Do something with response data
    //console.log('interceptors.response', response);
    return response.data
  },

  // Do something with response error
  error => {
    console.log('interceptors.response.error', error)

    // 4xx
    // 5xx
    // timeout

    return Promise.reject(error)
  }
)

export default axios
