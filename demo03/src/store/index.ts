/*
 * @Date: 2020-07-06 11:52:36
 * @information: 
 */ 
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import mine from './modules/mine'

Vue.use(Vuex)

export default new Vuex.Store({
  // 通过modules属性引入模块
  modules: {
    user,
    mine,
  }


})
