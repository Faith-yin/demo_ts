/*
 * @Date: 2020-07-08 16:21:18
 * @information: 公共
 */ 
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class PublicClass extends Vue {
  // 滚动条高度
  scrollTop: number = 0

  /**
   * @author: 殷鹏飞
   * @Date: 2020-07-08 16:22:32
   * @information: 获取滚动条高度
   */  
  handleScrollTop(): void {
    let top = document.documentElement.scrollTop || document.body.scrollTop
    this.scrollTop = top
  }
}