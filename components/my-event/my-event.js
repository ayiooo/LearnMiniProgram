// components/my-event/my-event.js
Component({
 
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleBtnClick() {
      console.log('click')
      // 发送事件 triggerEvent("事件名称"， {其他要传递的 key:value 键值})
      this.triggerEvent("increment", {name: "why", age: 18})
    }
  }
})
