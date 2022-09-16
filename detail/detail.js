// pages/detail/detail.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currId:0,
    subType1:[
      { id:1,
        guanzhu:false,
        img:"http://127.0.0.1:8090/images/beijin.png",
        title:"漫画1",
        content:"你的世界",},
      { id:2,
        guanzhu:false,
        img:"http://127.0.0.1:8090/images/beijin.png",
        title:"漫画2",
        content:"你的世界",},
      { id:3,
        guanzhu:false,
        img:"http://127.0.0.1:8090/images/beijin.png",
        title:"漫画1",
        content:"你的世界",},
    ],
    zj:[
      {
        zjId:1,
        img:"http://127.0.0.1:8090/images/tiezi/tie1.jpg",
        title:"第一章",
        title1:"冰淇淋之友"
      },
      {
        zjId:1,
        img:"http://127.0.0.1:8090/images/tiezi/tie3.png",
        title:"第二章",
        title1:"露营"
      },
      {
        zjId:1,
        img:"http://127.0.0.1:8090/images/tiezi/tie9.png",
        title:"第三章",
        title1:"站起来"
      },
      {
        zjId:1,
        img:"http://127.0.0.1:8090/images/beijin.png",
        title:"第四章",
        title1:"拯救大兵裴然"
      },
      {
        zjId:1,
        img:"http://127.0.0.1:8090/images/beijin.png",
        title:"第五章",
        title1:"神雕也是神"
      }
      
    ]
    
  },
  showOrUpdateQuantity(goodsid,guanzhu){
    let subType1= this.data.subType1;
    subType1.forEach(function(goods){
      if(goods.id === goodsid){
        goods.guanzhu=guanzhu;
        return;
      }
    });
    this.setData({
      subType1:subType1,
    })
  },

  showguanzhu(e){
    console.log(e.id)
    const goodsid=e.currentTarget.dataset.goodsid;
    this.showOrUpdateQuantity(goodsid,true);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  },
  checkType(e){
    var i = e.currentTarget.dataset.id;
    this.setData({
      currId:i
    })
    console.log(this.data)
  },
  guanzhu(){
    wx.showToast({
      title: '关注成功',
    })
  },

})