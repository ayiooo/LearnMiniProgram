Page({
  data: {
    titles: ['衣服', '鞋子', '裤子']
  },
  handleBtnClick() {
    console.log("按钮被点击了")
  },
  handleTouchStart(e) {
    console.log('handleTouchStart', e)
  },
  handleTouchMove(e) {
    console.log('handleTouchMove', e)
  },
  handleTouchEnd(e) {
    console.log('handleTouchEnd', e)
  },
  handleTouchCancel(e) {
    console.log('handleTouchCancel', e)
  },
  handleLongPress(e) {
    console.log('handleLongPress', e)
  },
  handleEventClick(e) {
    console.log(e)
  },
  // 
  handleBtnTouchEnd(e) {
    console.log("handleBtnTouchEnd", e)
  },
  handleInnerClick(e) {
    console.log("handleInnerClick", e)
  },
  handleOutterClick(e) {
    console.log("handleOutterClick", e)
  },
  // 
  handleItemClick(e) {
    console.log(e)
    const dataset = e.target.dataset
    const {title, index} = dataset
    console.log(title, index)
  },
  // 事件捕获
  handleCaptureView1() {
    console.log("handleCaptureView1")
  },
  handleCaptureView2() {
    console.log("handleCaptureView2")
  },
  handleCaptureView3() {
    console.log("handleCaptureView3")
  },
  // 事件冒泡
  handleView1Click() {
    console.log("handleView1Click")
  },
  handleView2Click() {
    console.log("handleView2Click")
  },
  handleView3Click() {
    console.log("handleView3Click")
  },
})