// pages/home/home.js
Page({
  showToast() {
    wx.showToast({
      title: '加载中',
      duration: 2000,
      icon: "loading",
      image: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2104351895,3299575660&fm=26&gp=0.jpg",
      mask: true,
      success() {
        console.log("展示弹窗成功")
      },
      fail() {
        console.log("展示弹窗失败")
      },
      complete(){
        console.log("展示弹窗执行完成")
      }
    })   
  },
  showModal() {
    wx.showModal({
      title: 'this title',
      content: 'this is content',
      showCancel: false,
      success(res) {
        if(res.cancel) {
          console.log("你点击了取消")
        }
        if(res.confirm) {
          console.log("你点击了确定")
        }
      },
      fail() {
        console.log("你点了取消")
      }
    })
  },
  showLoading() {
    wx.showLoading({
      title: '加载中',
    })
  
    setTimeout(() => {
      // 必须手动调用hideLoading方法才会消失
      wx.hideLoading()
    }, 3000)

  },
  showActionSheet() {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
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
  onLoad: function (options) {

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
    return {
      title: "hello",
      imageUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2104351895,3299575660&fm=26&gp=0.jpg",
      path: "/pages/about/about"
    }
    
  }
})