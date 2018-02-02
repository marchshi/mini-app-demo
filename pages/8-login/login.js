Page({
  data:{
    text:"Page login"
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
  
  silence(){
    let params = {
      appid : "wx2c0522882c6cd836",
      redirect_uri : "http://gatewaytest.bm001.com/jwt/wechat/checkFansSilence?duserCode=BS00004&lastHref=lastHref",
      response_type : "code",
      scope : "snsapi_base",
      state : 1
    }
    wx.request({
          url : "https://open.weixin.qq.com/connect/oauth2/authorize#wechat_redirect",
          method : "GET",
          data : params,
          success:function(res){
            console.log("===========session_key and opneid success==========",res);

          },
          fail:function(res){
            console.log("===========fail==========",res)
          }
        })
  },

  login(){
    let appId = "wx81be3f0f0f89a13b"
    let appSecret = "44b59b99a8698bd9c55eae675a83212d"
    wx.login({
      success:function(res){
        console.log(res);
        let code = res.code;
        //获取session_key 和 openid
        wx.request({
          url : "https://api.weixin.qq.com/sns/jscode2session",
          method : "GET",
          data :{
            appid :"wx81be3f0f0f89a13b",
            secret :"44b59b99a8698bd9c55eae675a83212d",
            js_code : code,
            grant_type :"authorization_code",
          },
          success:function(res){
            console.log("===========session_key and opneid success==========",res);
            wx.getUserInfo({
              withCredentials :true,
              lang :"zh_CN",
              success:function(res){
                console.log("============getUserInfo success==================",res)

              }
            })

          },
          fail:function(res){
            console.log("===========fail==========",res)
          }
        })

      }
    })
  },

  testNode(){
    var WXBizDataCrypt = require('./WXBizDataCrypt')
    var appId = 'wx4f4bc4dec97d474b'
    var sessionKey = 'tiihtNczf5v6AKRyjwEUhQ=='
    var encryptedData = 
    	'CiyLU1Aw2KjvrjMdj8YKliAjtP4gsMZM'+
    	'QmRzooG2xrDcvSnxIMXFufNstNGTyaGS'+
    	'9uT5geRa0W4oTOb1WT7fJlAC+oNPdbB+'+
    	'3hVbJSRgv+4lGOETKUQz6OYStslQ142d'+
    	'NCuabNPGBzlooOmB231qMM85d2/fV6Ch'+
    	'evvXvQP8Hkue1poOFtnEtpyxVLW1zAo6'+
    	'/1Xx1COxFvrc2d7UL/lmHInNlxuacJXw'+
    	'u0fjpXfz/YqYzBIBzD6WUfTIF9GRHpOn'+
    	'/Hz7saL8xz+W//FRAUid1OksQaQx4CMs'+
    	'8LOddcQhULW4ucetDf96JcR3g0gfRK4P'+
    	'C7E/r7Z6xNrXd2UIeorGj5Ef7b1pJAYB'+
    	'6Y5anaHqZ9J6nKEBvB4DnNLIVWSgARns'+
    	'/8wR2SiRS7MNACwTyrGvt9ts8p12PKFd'+
    	'lqYTopNHR1Vf7XjfhQlVsAJdNiKdYmYV'+
    	'oKlaRv85IfVunYzO0IKXsyl7JCUjCpoG'+
    	'20f0a04COwfneQAGGwd5oa+T8yO5hzuy'+
    	'Db/XcxxmK01EpqOyuxINew=='
    var iv = 'r7BXXKkLb8qrSNn05n0qiA=='
    
    var pc = new WXBizDataCrypt(appId, sessionKey)
    
    var data = pc.decryptData(encryptedData , iv)
    
    console.log('解密后 data: ', data)
  }

})