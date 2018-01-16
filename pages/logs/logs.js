//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShow:function(){
    console.log(getCurrentPages())
  },
  back:function(){
    let pages = getCurrentPages()
    if(pages.length > 0){
      wx.navigateBack({
        delta: 2
      })
    }else{
      console.log("沒有可供返回的頁面了")
    }
    
  },
  new:function(){
    // console.log(Page.prototype.route) undefined
    wx.navigateTo({
      url : '/pages/logs/logs'
    })
  }
})
