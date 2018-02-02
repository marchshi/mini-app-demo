Page({
  data:{
    text:"Page storage"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  bindset(){
    wx.setStorageSync("openid","123123123")
    wx.showToast({
      title :"保存成功"
    })
  },
  bindget(){
    let openid = wx.getStorageSync("openid");
    console.log("===========openid==============",openid);
  },
  setObjectTap(){
    let obj = {
      name :"smq",
      age : 23
    }
    wx.setStorageSync("userInfo",obj)
    wx.showToast({
      title :"保存成功"
    })
  },
  getObjectTap(){
    let userInfo = {};
    userInfo = wx.getStorageSync("userInfo");
    console.log("===========userInfo.name==============",userInfo.name);
    console.log("===========userInfo.age==============",userInfo.age);
  }

})