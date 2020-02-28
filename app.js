// 注册一个小程序示例
App({
  globalData: {
    name: 'coderwhy',
    age: 18
  },
  // 小程序初始化完成 只执行一次
  onLaunch: function (options) {
    // 网络请求 还是比较少的，都是请求某个页面的时候，在对应页面的声明周期函数中去发送请求
    // 获取用户信息
    // ------
    // console.log(options)
  },
  // 小程序显示出来时 每次显示都会执行
  onShow: function (options) {
    // 1.判断小程序进入场景
    console.log(options.scene)
    switch (options.scene) {
      case 1001: 
        break;
      case 1005:
        break;
      default:
        break;
    }
    // 2.获取用户信息，并且获取到用户信息后，将用户信息传递给服务器
    wx.getUserInfo({
      success: function(res) {
        // console.log(res)
      }
    })
  },
  // 小程序隐藏时
  onHide: function () {
    
  },
  // 小程序发生错误时
  onError: function (msg) {
    
  }
})
