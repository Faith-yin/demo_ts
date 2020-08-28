<!--
 * @Date: 2020-07-07 09:54:16
 * @information: 顶部导航栏
--> 
<template>
  <div id="tabbar">
    <div class="tabbar-box">
      <el-menu :default-active="$route.path"
                class="el-menu-demo" 
                mode="horizontal" 
                router
                active-text-color="#ff6700"
                text-color="#333"
                @select="handleChange">
        <el-menu-item v-for="(item, index) in tabConfig"
                      :key="index"
                      :index="item.path">{{item.name}}</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch, Emit} from 'vue-property-decorator';
import tabMixins from '@/mixins/tabMixins'
import { mixins } from 'vue-class-component';

@Component
export default class Tabbar extends mixins(tabMixins) {


  /**
   * @author: 殷鹏飞
   * @Date: 2020-07-07 10:05:38
   * @information: tab 被选中时触发
   */  
  handleChange(val: string): void {
    // console.log(val)
  }

}
</script>

<style lang="scss">
#tabbar {
  width: 100%;
  background-color: #fff;
  .tabbar-box {
    max-width: 1000px;
    margin: 0 auto;
  }
  .el-tabs {
    .el-tabs__item {
      font-size: 20px;
    }
  }


}
</style>