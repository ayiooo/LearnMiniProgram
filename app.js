App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  // 小程序初始化完成时，会执行的生命周期函数
  onLaunch: function () {
    console.log("小程序初始化完成：onLaunch")
    // 异步调用
    // wx.getUserInfo({
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
    setTimeout(function(){
      throw new Error("3秒后抛出的异常")
    }, 3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  // 小程序页面显示出来之后会执行的声明周期函数  
  onShow: function (options) {
    console.log('页面显示出来：onShow')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('界面被隐藏的时候执行：onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("小程序发生了一些错误时会执行：onError")
  }
})
