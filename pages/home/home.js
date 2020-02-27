// home.js
Page({
  data: {
    name: 'Xialuo',
    age: 18,
    students: [
      { id: 101, name: 'kobe', age: 30 },
      { id: 102, name: 'zhangsan', age: 28 },
      { id: 103, name: 'lisi', age: 32 },
      { id: 104, name: 'why', age: 18 },
    ],
    counter: 0
  },
  handleBtnClick() {
    // console.log("按钮发生了点击")
    // 1.错误做法：页面是不会刷新的
    // this.data.counter += 1
    // console.log(this.data.counter)
    // 2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})

// 编程范式：
// 1.命令式编程：原生（jQuery）操作DOM 一步步给它命令才能达到你想要的的效果
// 2.声明式编程：三大框架