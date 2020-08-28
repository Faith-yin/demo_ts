/*
 * @Date: 2020-07-07 10:25:45
 * @information: tab标签配置
 */ 
import {Component, Vue} from 'vue-property-decorator';
import tabInterface from '@/interface/tabInterface'

@Component
export default class TabConfig extends Vue {
  // tab配置
  public tabConfig: Array<tabInterface> = [
    {
      index: '0',
      name: '首页',
      path: '/Article',
    },
    {
      index: '1',
      name: '消息',
      path: '/Message',
    },
    {
      index: '2',
      name: '用户',
      path: '/User',
    },
    {
      index: '3',
      name: '我的',
      path: '/Mine',
    },
  ]
}
