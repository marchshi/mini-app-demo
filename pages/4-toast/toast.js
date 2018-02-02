Page({
  data: {
    text: "Page toast"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

  toast1: function (e) {
    wx.showToast({
      title: "你的toast不行"
    })
  },

  toast2: function (e) {
    wx.showToast({
      title: "给我转",
      icon: "loading"
    })
  },

  toast3: function (e) {
    wx.showToast({
      title: "先转个5秒钟",
      icon: "loading",
      duration: 5000,
    })
  },

  toast4: function (e) {
    wx.showToast({
      title: "你站在此处不要动",
      icon: "loading",
      duration: 5000,
      mask: true,
    })
  },

  toast5: function (e) {
    wx.showToast({
      title: "你站在此处不要动,我去给你建个火车站",
      icon: "loading",
      duration: 5000,
      mask: true,
      success: function () {
        console.log("橘子来了")
      }
    })
  },

  hide: function (e) {
    wx.hideLoading();
    wx.showToast({
      title: "橘子来了",
      duartion: 500,
    })
  },

  loading1: function (e) {
    wx.showLoading({
      title: "你站在此处不要动",
    })
  },

  loading2: function (e) {
    wx.showLoading({
      title: "你站在此处不要动",
      complete: function () {
        console.log("橘子来了")
      }
    })
  },

  modal1: function (e) {
    wx.showModal({
      title: "你站在此处不要动",
      content: "我去给你建个火车站",
      success: function (res) {
        console.log(res);
        console.log("橘子来了")
      },
      fail: function () {
        console.log("橘子坏了")
      },
      complete: function () {
        console.log("火车站建好了")
      }
    })
  },

  modal2: function (e) {
    wx.showModal({
      title: "提示",
      content: "没有输入昵称，请重新填写",
      showCancel: false,
      success: function (res) {
        console.log(res);
        console.log("橘子来了")
      },
    })
  },

  actionSheet1: function (e) {
    wx.showActionSheet({
      itemList: ["a", "b", "c"],

    })
  },


})