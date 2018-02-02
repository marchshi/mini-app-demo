Page({
  data:{
    text:"点击选择地址"
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

  //新的授权方式
  newAuth(e){
    //方法 -- 权限 -- 文字
    let scopeTable = {
      chooseLocation : {
        scope : "scope.userLocation" ,
        text : "地理位置",
      }
    }
    //1 调用方法前查看其需要的授权
    let scopeName = scopeTable.chooseLocation.scope;
    let scopeText = scopeTable.chooseLocation.text;
    //2 通过getSetting 查看授权情况
    wx.getSetting({
      success:function(res){
        console.log("用户授权情况",res)
        //3 判断此权限的授权情况 (未申请 拒绝授权 授权成功)
        if( !res.authSetting.hasOwnProperty(scopeName)){
          //未申请 则去申请授权
          wx.authorize({
            scope : scopeName,
            success : function(){
              //**调用方法**
              wx.chooseLocation({
                success:function(res){
                  console.log("地图返回的信息",res)
                }
              })
            }
          })
        }else if(!res.authSetting[scopeName]){
          //用户拒绝授权 则提示让用户openSetting主动打开
          wx.showModal({
            title:"申请授权",
            content:"请在授权列表中打开 “"+scopeText+"” 的授权",
            showCancel : false,
            success:function(res){
              wx.openSetting({
                success : function(res){
                  console.log("openSetting返回情况",res);
                  //如果授权成功了则调用
                  if(res.authSetting[scopeName]){
                    //**调用方法**
                    wx.chooseLocation({
                      success:function(res){
                        console.log("地图返回的信息",res)
                      }
                    })
                  }
                }
              })
            }
          })
        }else{
          //**调用方法**
          wx.chooseLocation({
            success:function(res){
              console.log("地图返回的信息",res)
            }
          })
        }
        console.log(res)
      }
    })
  },

  wrapperAuth(){
    
    this._wrapperAuth({
      name:"chooseLocation",
      success :function(){
        wx.chooseLocation({
          success : function(res){
            console.log(res)
          }
        })
      }
    })

  },

  getUserInfo(){
    this._wrapperAuth({
      name : "getUserInfo",
      success : function(){
        wx.getUserInfo({
          success : function(res){
            console.log("xxxxxxxxxx",res)
          }
        })
      }
    })
  },

  _wrapperAuth(obj){

    //方法 -- 权限 -- 文字 对应表
    let scopeTable = {
      chooseLocation : {
        scope : "scope.userLocation" ,
        text : "地理位置",
      },
      getUserInfo : {
        scope : "scope.userInfo" ,
        text : "用户信息",
      },
    }
    //判断传递参数是否合法
    if(obj.hasOwnProperty("name") && scopeTable.hasOwnProperty(obj.name) && obj.hasOwnProperty("success") && obj.success instanceof Function){
      
    }else{
      wx.showToast({
        title:"_wrapperAuth方法传递的参数不正确",
        icon : "none"
      })
      return;
    }
    //1 调用方法前查看其需要的授权
    let scopeName = scopeTable[obj.name].scope;
    let scopeText = scopeTable[obj.name].text;
    //2 通过getSetting 查看授权情况
    wx.getSetting({
      success:function(res){
        console.log("用户授权情况",res)
        //3 判断此权限的授权情况 (未申请 拒绝授权 授权成功)
        if( !res.authSetting.hasOwnProperty(scopeName)){
          //未申请 则去申请授权
          wx.authorize({
            scope : scopeName,
            success : function(){
              obj.success();
            }
          })
        }else if(!res.authSetting[scopeName]){
          //用户拒绝授权 则提示让用户openSetting主动打开
          wx.showModal({
            title:"申请授权",
            content:"请在授权列表中打开 “"+scopeText+"” 的授权",
            showCancel : false,
            success:function(res){
              wx.openSetting({
                success : function(res){
                  console.log("openSetting返回情况",res);
                  //如果授权成功了则调用
                  if(res.authSetting[scopeName]){
                    obj.success();
                  }
                }
              })
            }
          })
        }else{
          obj.success();
        }
        console.log(res)
      }
    })
  },


  openSetting(e){
    wx.openSetting({
      success:function(e){
        console.log(e)
      }
    })
  },

  openMap(e){
    let that = this;
    wx.getSetting({
      success:function(e){
        // scope.userLocation:false
        console.log("========当前授权情况===========",e)
      }
    })

    wx.authorize({
      scope: 'scope.record',
      success(res) {
          console.log("=======用户同意授权========",res)
      },
      fail(res) {
        console.log("=======申请授权失败========",res)
      },
      complete(res){
        console.log("=======申请授权结束========",res)
      }
    })

    //第一种 调用报错后授权(优先微信授权(调用哪些方法?) 失败手动授权)   第二种 调用前检测授权(2种情况:微信帮忙调授权 和 微信不给调授权)
    // wx.chooseLocation({
    //   success:function(res){
    //     let str = "地址名:" + res.name + "\n" + "详细地址："+res.address + "\n" + "经度："+res.longitude + "\n" + "维度："+res.latitude
    //     that.setData({
    //       text : str
    //     }) 
    //   },
    //   fail: function (res) {
    //     console.log("=========fail=========",res); //errMsg:"chooseLocation:fail auth deny"

    //     if(res.errMsg.indexOf('auth') > 0){
    //       console.log("检测出来是权限问题")

    //       wx.showModal({
    //         title:"申请授权",
    //         content:"请打开定位授权",
    //         success:function(){
    //           wx.openSetting({
    //             success:function(e){
    //               console.log(e)
    //             }
    //           })
    //         }
    //       })
      
    //     }
    //   },
    //   complete:function(res){
    //     console.log("=========complete=========",res);
    //   }
    // })
  },

  getAuth(e){
    wx.authorize({
      scope : "scope.userLocation",
      success:function(e){
        console.log("授权成功",e)
      },
      fail:function(e){
        console.log("授权结束",e)
      },
      complete:function(){
        console.log("授权结束")
      }
    })
  }

})