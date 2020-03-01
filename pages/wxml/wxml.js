Page({
  data: {
    message: "你好小程序",
    firstname: 'kobe',
    lastname: 'bryant',
    age: 20,
    bindClass: 'box',
    isActive: false,
    isShow: false,
    currentTime: new Date().toLocaleString(),
    score: 59,
    isHidden: false,
    movies: ['珍品 Curiosa', '世界边界 Les confins du monde', '最漂亮的一对 Das schönste Paar', '糖心爹地 Papi Chulo'],
    nums: [
      [1, 2, 3, 4],
      [2, 2, 3, 4],
      [3, 2, 3, 4],
      [4, 2, 3, 4],
    ],
    letters: ['a', 'b', 'c']
  },
  
  addXtoLetter() {
    this.data.letters.splice(1, 0, 'x')
    const newLettes = this.data.letters
    this.setData({
      letters: newLettes
    })
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        currentTime: new Date().toLocaleString()
      })
    }, 1000)
  },
  addScore() {
    this.setData({
      score: this.data.score + 6
    })
  },
  handleHidden() {
    this.setData({
      isHidden: !this.data.isHidden
    })
  },
  handleChangeColor() {
    if (this.data.bindClass === 'box') {
      this.setData({
        bindClass: 'box red'
      })
    } else {
      this.setData({
        bindClass: 'box'
      })
    }
  },
  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})