const TOKEN = 'token'
App({
  // 对象（放在内存中），小程序关闭掉就销毁了
  globalData: {
    token : ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 1. 先从缓存中取出token 如果没有再进行登录
    const token = wx.getStorageSync(TOKEN)
    // 2. 判断token是否有值，如果没值进行登录，有值直接用
    if(token && token.length !== 0) { // 验证token是否过期就可以了
      // 验证token是否过期
      this.check_token(token)
    } else { // 没有token 进行登录操作
      this.login()
    }
  },
  check_token(token) {
    console.log('执行了验证token操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'POST',
      header: {
        token
      },
      success: (res) => {
        console.log(res)
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
  login() {
    console.log("执行了登录操作")
    // 登录操作
    wx.login({
      // 获取到的code只有5分钟的有效期
      success: (res) => {
        // 1. 获取code
        const code = res.code
        // 2. 将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'POST',
          data: {
            code
          },
          success: (res) => {
            // 1.取出token
            const token = res.data.token
            // 2.将token保存在globalData中
            this.globalData.token = token
            // 3.将token进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
