App({
// 初始化云服务环境
  onLaunch:function(){
    wx.cloud.init({
      env: 'test-fph51'
    })
  }
})