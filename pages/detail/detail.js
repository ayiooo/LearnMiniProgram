// pages/detail/detail.js
Page({
  handleBack() {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面卸载 页面退出的时候
   */
  onUnload: function() {
    console.log('用户退出了 详情页面')
    // 1.获取首页 的 Page对象
    // getCurrentPages返回当前所有栈里的活跃页面
    const pages = getCurrentPages()
    // console.log(pages)
    const home = pages[pages.length - 2]
    home.setData({
      title: "呵呵呵"
    })
  }

})