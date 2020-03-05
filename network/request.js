import {baseUrl, timeout} from './config.js'

function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + options.url,
      timeout: timeout,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}

// function request(options) {
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: options.url,
//       method: options.method || 'get',
//       data: options.data || {},
//       success(res) {
//         resolve(res)
//       },
//       fail(err) {
//         reject(err)
//       }
//     })
//   })
// }

export default request