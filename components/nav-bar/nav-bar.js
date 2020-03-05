// components/nav-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navItems: {
      type: Array,
      value: ['1', '2', '3']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event){
      console.log(event)
      // console.log(event)
      // 1.取出index
      const index = event.currentTarget.dataset.index
      console.log(index)
      // 2.修改currentIndex
      this.setData({
        currentIndex: index
      })
      // 3.告诉父组件
      this.triggerEvent("navClick", {index: index})
    }
  }
})
