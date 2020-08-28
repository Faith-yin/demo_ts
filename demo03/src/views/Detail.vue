<!--
 * @Date: 2020-07-07 18:01:21
 * @information: 文章详情
--> 
<template>
  <div id="detail">
    <!-- 顶部导航栏 -->
    <tabbar></tabbar>
    <div class="wrap">
      <div class="container">
        文章详情
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import Tabbar from '@/components/Tabbar.vue'

@Component({
  components: {
    'tabbar': Tabbar,
  }
})
export default class Detail extends Vue {

}
</script>

<style lang="scss">
#detail {
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