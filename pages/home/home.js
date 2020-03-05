// pages/home/home.js
Page({
  handleIncrement(event) {
    console.log(event.detail)
    this.setData({
      counter: this.data.counter += 1
    })
  },
  handleNavClick(event) {
    console.log(event)
  },
  handleIncrement() {
    // 最终修改father-control组件里面的数据
    // 里面的参数是class或者id
    // 1.获取组件对象
    const father_control = this.selectComponent('#fatherControl')
    // console.log(father_control)
    // 2.通过setData修改组件的数据
    // 最好不要这么修改，我们应该在子组件中写一个方法，让父组件去调用子组件的方法。
    // father_control.setData({
    //   counter: ++father_control.data.counter
    // })
    // console.log(father_control)
    
    // 3.通过方法对数据进行修改
    father_control.increment()
  },
  handleSwitchisShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    counter: 0,
    navItems: ['流行', '新款', '精选'],
    isShow: true
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

  }
})