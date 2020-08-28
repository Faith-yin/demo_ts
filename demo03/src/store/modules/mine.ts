/*
 * @Date: 2020-07-10 08:41:15
 * @information: 我的表单
 */ 

const state = {
  form: {
    username: null,
    age: null,
    sex: null,
    birthday: null,
  }
}


const mutations = {
  // 清空表单
  CLEAR_FORM(state: any): void {
    let arr = ['username', 'age', 'sex', 'birthday']
    arr.forEach((el) => state.form[el] = null)
  }
}

const actions = {}

const getters = {}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}