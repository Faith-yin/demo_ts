/*
 * @Date: 2020-07-08 08:46:40
 * @information: 
 */ 
const state = {
  // 用户列表
  userList: [
    {
      username: 'ypf',
      age: 18,
      sex: '男',
      birthday: '1996-09-13',
    },
    {
      username: '张三',
      age: 19,
      sex: '男',
      birthday: '1997-10-14',
    },
    {
      username: '小红',
      age: 20,
      sex: '女',
      birthday: '1999-01-29',
    },
    {
      username: '小红',
      age: 20,
      sex: '女',
      birthday: '1999-01-29',
    },
    {
      username: '小红',
      age: 20,
      sex: '女',
      birthday: '1999-01-29',
    },
    {
      username: '小红',
      age: 20,
      sex: '女',
      birthday: '1999-01-29',
    },
    {
      username: '小红',
      age: 20,
      sex: '女',
      birthday: '1999-01-29',
    },
    
  ],
}

const mutations = {
  // 添加
  ADD_ITEM(state: any, model: object): void {
    state.userList.push({...model})
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
