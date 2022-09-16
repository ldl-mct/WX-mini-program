// pages/a/01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    var01:"变量值",
    var02:'dfafdf',
    tiezi1:[
      {id:1,
      img:"http://127.0.0.1:8090/images/tiezi/tie1.jpg",
      title:"抓到一只修勾勾"},
      {id:2,
      img:"http://127.0.0.1:8090/images/tiezi/tie3.png",
      title:"强推双向渡劫"},
      {id:3,
      img:"http://127.0.0.1:8090/images/tiezi/tie5.png",
      title:"蛤蛤蛤绝了"},
      {id:4,
      img:"http://127.0.0.1:8090/images/tiezi/tie4.png",
      title:"更了更了！！！"},
      {id:5,
      img:"http://127.0.0.1:8090/images/tiezi/tie2.png",
      title:"好温馨的漫画"},
    ],
    tiezi2:[
      {id:1,
      img:"http://127.0.0.1:8090/images/tiezi/tie6.png",
      title:"看见请叫我滚去学习"},
      {id:2,
      img:"http://127.0.0.1:8090/images/tiezi/tie8.png",
      title:"请认真听讲！谢谢"},
      {id:3,
      img:"http://127.0.0.1:8090/images/tiezi/tie9.png",
      title:"好像回到那年夏天"},
      {id:4,
      img:"http://127.0.0.1:8090/images/tiezi/tie10.png",
      title:"强推双向渡劫"},
      {id:5,
      img:"http://127.0.0.1:8090/images/tiezi/tie2.png",
      title:"林崽误会老爸了"},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that=this
    wx.request({
      // url: 'http://127.0.0.1:8090/register.htm',
      url: 'http://127.0.0.1:8090/img.php',
      success:function(res){
        console.log(res.data)
        that.setData({
          var02:res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})