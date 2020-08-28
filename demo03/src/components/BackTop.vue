<!--
 * @Date: 2020-07-08 15:29:13
 * @information: 回到顶部
--> 
<template>
  <div id="back-top" @click="backTopClick">
    <div class="back-top-box" title="返回顶部">
      <i class="el-icon-caret-top"></i>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

@Component
export default class BackTop extends Vue {


  /**
   * @author: 殷鹏飞
   * @Date: 2020-07-08 16:04:13
   * @information: 滚动条回顶部动画
   */
  backTopClick(): void {
    let timeInterval = setInterval(() => {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      let speed = top / 4
      if(document.documentElement.scrollTop != 0) {
        document.documentElement.scrollTop -= speed
      }else {
        document.body.scrollTop -= speed
      }
      top == 0 && clearInterval(timeInterval)
    }, 10)
  }
}
</script>

<style lang="scss">
#back-top {
    position: fixed;
    bottom: 100px;
    right: 120px;
    background-color: #f2f6fc;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: all 2s ease;
    &:hover {
      cursor: pointer;
      background-color: #fdf7f4;
    }
    .el-icon-caret-top {
      font-size: 22px;
      color: #ff6700;
    }




}
</style>