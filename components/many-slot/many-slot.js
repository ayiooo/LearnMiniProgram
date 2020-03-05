// components/many-slot/many-slot.js
Component({
  // 定义组件的配置选项
  // multipleSlots 在使用多插槽时需要设置为true
  // styleIsolation 设置样式的隔离方式
  options: {
    multipleSlots: true
  },
  // 让使用者可以传递一些数据 
  properties: {
    title: {
      type: String,
      value: '',
      observer:function(newVal, oldVal) {}
    }
  },
  // 定义组件内部的初始化数据
  data: {
    counter: 0
  },
  // 定义组件内部的函数
  methods: {
    foo() {
      console.log('foo')
    }
  },
  // 外界给我们的组件传递额外的样式
  externalClasses: ['title'],
  // 可以监听属性的改变
  observers: {
    // 这里没有 oldVal 的
    counter: function(newVal) {
      console.log(newVal)
    }
  },
  // 组件中监听生命周期函数
  /**
   * 1.父组件本身可以监听自己的，
   * 2.在子组件也能监听父组件的
   * 3.子组件也有自己的生命周期
   */
  // 1.监听所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log("监听组件所在页面显示时")
    },
    hide() {
      console.log("监听组件所在页面隐藏时")
    },
    resize() {
      console.log("监听组件所在页面尺寸发生改变时")
    },
  },
  // 2.监听组件本身的生命周期 
  lifetimes: {
    created() {
      console.log("组件被创建出来")
    },
    attached() {
      console.log("组件被添加到页面")
    },
    ready() {
      console.log("组件被渲染出来")
    },
    moved() {
      console.log("组件被移动到另外一个节点")
    },
    detached() {
      console.log("组件被移除掉时")
    }
  }
})