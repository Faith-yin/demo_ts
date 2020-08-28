<!--
 * @Date: 2020-07-07 15:18:01
 * @information: 基础信息卡片
--> 
<template>
  <div id="base-card">
    <div  class="card-box" v-for="(item, index) in list" :key="index">
      <div class="cell-tag">
        <div class="tag">专栏</div>
        <div class="source">· 掘金安东尼</div>
        <div class="time">· 32分钟前</div>
        <div class="area">· Vue</div>
      </div>
      <div class="cell-title">
        <div class="title" @click="itemClick(index)">Vue(v2.6.11)万行源码生啃，就硬刚！</div>
      </div>
      <div class="cell-number">
        <div class="ding box">
          <i class="el-icon-thumb"></i>
          <span>32</span>
        </div>
        <div class="reply box">
          <i class="el-icon-s-comment"></i>
          <span>13</span>
        </div>
        <div class="share box">
          <i class="el-icon-s-promotion"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch, Emit} from 'vue-property-decorator';

@Component
export default class BaseCard extends Vue {
  // 数据列表
  @Prop() list!: Array<any>

  @Emit()
  emitItem(val: number): void {}


  /**
   * @author: 殷鹏飞
   * @Date: 2020-07-07 15:35:31
   * @information: 某一项被点击
   */
  itemClick(index: number): void {
    this.emitItem(index)
  }



}
</script>

<style lang="scss">
#base-card {
  .card-box {
    padding: 20px;
    border-top: 1px solid rgba(172, 169, 169, 0.5);
    background-color: #FCFCFC;
    .cell-tag {
      margin-bottom: 10px;
      font-size: 14px;
      display: flex;
      .tag {
        font-weight: 500;
        color: #b71ed7;
      }
      .source {
        color: #B2BAC2;
      }
      .time {
        color: #B2BAC2;
      }
      .area {
        color: #B2BAC2;
      }
    }
    .cell-title {
      margin-bottom: 10px;
      cursor: pointer;
      .title {
        font-size: 16px;
        font-weight: 600;
        text-align: left;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .cell-number {
      display: flex;
      color: #B2BAC2;
      .box {
        padding: 3px 10px;
        border: 1px solid rgb(218, 218, 218);
        &:hover {
          background-color: #fff;
          cursor: pointer;
        }
      }
      .ding {
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        .el-icon-thumb {
          margin-right: 3px;
        }
      }
      .reply {
        // border-bottom-right-radius: 5px;
        // border-top-right-radius: 5px;
        .el-icon-s-comment {
          margin-right: 3px;
        }
      }
      .share {
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
      }
    }
  }
}
</style>
