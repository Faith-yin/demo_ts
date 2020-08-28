<!--
 * @Date: 2020-07-06 12:00:50
 * @information: 用户
--> 
<template>
  <div id="user">
    <!-- 顶部导航栏 -->
    <tabbar></tabbar>
    <div class="wrap">
      <div class="container">
        <el-table :data="$store.state.user.userList" style="width: 100%">
          <el-table-column type="index"></el-table-column>
          <el-table-column prop="username" label="姓名"></el-table-column>
          <el-table-column prop="age" label="年龄"></el-table-column>
          <el-table-column prop="sex" label="性别"></el-table-column>
          <el-table-column prop="birthday" label="生日"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import Tabbar from '@/components/Tabbar.vue'

@Component({
  components: {
    'tabbar': Tabbar
  }
})
export default class User extends Vue {

}
</script>

<style lang="scss">
#user {
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
      .el-table {
        padding: 20px;
      }
    }
  }

}
</style>