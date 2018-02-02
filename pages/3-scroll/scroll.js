Page({
  data:{
    dataList:[
      { name : "smq1" },
      { name : "smq2" },
      { name : "smq3" },
      { name : "smq4" },
      { name : "smq5" },
      { name : "smq6" },
      { name : "smq7" },
      { name : "smq8" },
      { name : "smq9" },
      { name : "smq10" },
    ],

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
  // Do something when pull down.
    onPullDownRefresh: function () {
      wx.stopPullDownRefresh()
      let num = this.data.dataList.length + 1;
        console.log("=============onPullDownRefresh==================",num);
        console.log(this.data.dataList);
        let name = "smq" + num;
        this.data.dataList.push({ "name": name});
        console.log(this.data.dataList);
        this.setData({
          dataList : this.data.dataList
        })
    },

    // Do something when page reach bottom.
    onReachBottom: function () {
        let num = this.data.dataList.length + 1;
        console.log("=============onReachBottom==================",num);
        console.log(this.data.dataList);
        let name = "smq" + num;
        this.data.dataList.push({ "name": name});
        console.log(this.data.dataList);
        this.setData({
          dataList : this.data.dataList
        })
    },
})