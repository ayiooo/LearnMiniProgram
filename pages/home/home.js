// pages/home/home.js
// getApp() 调用获取 App() 产生的示例对象
// const app = getApp()
// console.log(app)
// console.log(app.globalData.name)
// const name = app.globalData.name
// const age = app.globalData.age

// 注册一个页面
// 每一个页面也有自己的生命周期
Page({
  // ---- 2. 初始化数据 --------
  data: {
    respData: {}
  },
  // ---- 3. 监听wxml中相关的事件 --------
  handleGetUserInfo(event) {
    console.log('---------------')
    console.log(event)
  },
  // ---- 1. 监听页面的生命周期函数 --------
  // 页面被加载出来
  onLoad() {
    console.log("onLoad")
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        const data = res.data
        this.setData({
          respData: data
        })
        console.log(this.data.respData)
      }
    })
  },
  // 页面显示出来
  onShow() {
    console.log("onShow")
  }, 
  // 页面初次渲染完成时 回调 只执行一次
  onReady() {
    console.log("onReady")
  },
  // 页面隐藏起来时
  onHide() {
    console.log("onHide")
  },
  // 当页面不被需要时卸载页面
  onUnload() {
    console.log("onUnload")
  },
  // ---- 4. 监听其他事件 --------
  // 监听页面的滚动
  onPageScroll(e) {
    console.log(e)
  },
  // 监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部')
  },
  // 下拉加载
  onPullDownRefresh() {
    console.log('下拉加载')
  }
})