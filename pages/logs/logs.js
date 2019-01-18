//logs.js
const util = require('../../utils/util.js')
Component({
  pageLifetimes: {
    data:{
      logs:''
    },
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })  
      }
       this.setData({
          logs: (wx.getStorageSync('logs') || []).map(log => {
            return util.formatTime(new Date(log))
          })
        })
    } 
  },
  methods:{
    btn(){
      console.log('----btn----btn--')
    }
  }
})

