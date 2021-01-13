import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    unRead: [
      {
        id: 1,
        name: "两只老虎爱跳舞"
      },
      {
        id: 2,
        name: "小兔子乖乖拔萝卜"
      },
      {
        id: 3,
        name: "我和小鸭子学走路"
      },
      {
        id: 4,
        name: "童年是最好的礼物"
      },
      {
        id: 5,
        name: "Vuex是一个专门为vue.js应用程序"
      },
      {
        id: 6,
        name: "Vuex的状态存储是响应式的"
      },
      {
        id: 7,
        name: "转转变声奥特曼打死小怪兽"
      }
    ],
    read:[],
    recycle:[]
  },
  mutations: {
    // 将状态改为已读
    changeToRead(state, id) {
      console.log(id,1)
      var index = state.unRead.findIndex(c => c.id == id);
      console.log(index, 2);
      var data = state.unRead.splice(index, 1);
      console.log(data, 3);
      state.read.push(data[0]);
    },
    // 根据ID删除
    deleteById(state, id) {
      var index = state.read.findIndex(c => c.id == id);
      var data = state.read.splice(index, 1);
      state.recycle.push(...data);
    },
    // 还原
    restore(state, id) {
      var index = state.recycle.findIndex(c => c.id == id);
      var data = state.recycle.splice(index, 1);
      state.read.push(...data)
    },
    // 删除全部
    deleteAll(state) {
      var data = state.read.splice(0,state.read.length);
      state.recycle.push(...data)
    },
    // 全部已读
    allRead(state) {
      var data = state.unRead.splice(0,state.unRead.length);
      state.read.push(...data)
    },
    // 全部还原
    restoreAll(state) {
      var data = state.recycle.splice(0,state.recycle.length);
      state.read.push(...data)
    }
  },
  actions: {
  },
  modules: {
  }
})
