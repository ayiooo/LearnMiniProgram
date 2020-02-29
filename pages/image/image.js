Page({
  data: {
    imagePath: ''
  },
  handleChooseAlbum() {
    // 系统API，让用户在相册中选择图片（或者拍照）
    // console.log("click")
    const that = this
    wx.chooseImage({
      success: function(res) {
        // 1.取出路径
        const path = res.tempFilePaths[0]
        console.log(path)
        // 2.设置imagePath
        // this: undefined
        that.setData({
          imagePath: path
        })
      },
    })
  },
  imageloadover() {
    console.log("图片加载完成")
  }
})