// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  
  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    selectedColor: "#3cc51f",
    borderStyle: "black",
    list: [{
      pagePath: "/pages/index/index",
      text: "首页",
      "iconPath": "/images/icon_component.png",
      "selectedIconPath": "/images/icon_component_HL.png",
    }, {
      pagePath: "/pages/logs/logs",
      text: "日志",
      iconPath: "/images/icon_component.png",
      selectedIconPath: "/images/icon_component_HL.png",
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      console.log(data)
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
      console.log(this.data.selected,'---dangqian---')
    }
  }
})
