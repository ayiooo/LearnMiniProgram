// pages/home/home.js
import request from '../../network/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 发送网络请求
    // 1.原生发送网络请求
    // this.getOrigin()

    // 2.使用封装的request发送网络请求
    // Promise最大的好处就是不会出现回调地狱
    request({ url: '/recommend'})
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  },
  getOrigin() {
    // 1.发送最简单的get请求
    wx.request({
      url: 'http://123.207.32.32:8000/api/wh/recommend',
      success(res) {
        console.log(res)
      }
    })
    // 2.get请求，并且携带参数
    wx.request({
      url: 'http://123.207.32.32:8000/api/wh/home/data',
      data: {
        type: 'sell',
        page: 1
      },
      success(res) {
        console.log(res)
      }
    })
    // 3.post请求，并且携带参数
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        username: "xialuo",
        password: 　"123456"
      },
      success(res) {
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})