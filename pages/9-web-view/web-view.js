Page({
  data:{
    text:"Page web-view",
    url : ""

  },
  onLoad:function(options){
    let redirect_uri = "http://gatewaytest.bm001.com/jwt/wechat/checkFansSilence?duserCode=BS00004";
    console.log(redirect_uri);
    redirect_uri = encodeURIComponent(redirect_uri);
    console.log(redirect_uri);
    this.setData({
      url : "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2c0522882c6cd836&redirect_uri="+redirect_uri+"&response_type=code&scope=snsapi_base&state=1#wechat_redirect"
      // url : "https://bmcwxtest.bm001.com/D1234#/"
    })
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
  }
})