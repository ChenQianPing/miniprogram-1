// pages/home2/home2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    inputValue: ''
  },

  inputHandler(event) {
    this.setData({
      inputValue: event.detail.value || ''
    });
  },

  buttonHandler(event) {
    const newItem = this.data.inputValue.trim();
    if (!newItem) return;
    const itemArr = [...this.data.items, newItem];
    wx.setStorageSync('items', itemArr);
    this.setData({ items: itemArr });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const that = this;

    /* const itemArr = wx.getStorageSync('items') || []; 
    this.setData({ items: itemArr }); */

    wx.request({
      url: 'http://132.232.21.176:3000/items',
      success(res) {
        that.setData({ items: res.data });
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})