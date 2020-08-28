<!--
 * @Date: 2020-07-06 11:52:36
 * @information: 首页
--> 
<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <tabbar></tabbar>
    <div class="wrap">
      <div class="container">
        <!-- 基础信息卡片 -->
        <base-card :list="list"
                    @emit-item="itemClick"></base-card>
      </div>
    </div>
    <!-- 回到顶部 -->
    <transition name="fade">
      <back-top v-if="scrollTop>50"></back-top>
    </transition>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import Tabbar from '@/components/Tabbar.vue'
import BaseCard from '@/components/BaseCard.vue'
import BackTop from '@/components/BackTop.vue'
import publicClass from '@/mixins/publicClass'

@Component({
  components: {
    'tabbar': Tabbar,
    'base-card': BaseCard,
    'back-top': BackTop,
  }
})
export default class Home extends mixins(publicClass) {
  // 数据列表
  list: Array<any> = [1,2,3,4,5,6,7,1,2,3,4,5,6,7,8,9,4,5,6,7,8,9]


  /**
   * @author: 殷鹏飞
   * @Date: 2020-07-07 17:56:38
   * @information: 列表中某一项被点击
   */  
  itemClick(val: number): void {
    this.$router.push({path: `/Article/Detail/${val}`})
  }


  mounted(): void {
    window.addEventListener('scroll', this.handleScrollTop)
  }
}
</script>

<style lang="scss">
#home {
  background-color: #F4F5F5;
  #tabbar {
    position: fixed;
    box-shadow: 0px -18px #fff;
  }
  .wrap {
    max-width: 1000px;
    margin: 0 auto;
    .container {
      padding: 70px 0;
    }
  }
}
</style>