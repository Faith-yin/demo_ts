<!--
 * @Date: 2020-07-06 12:01:00
 * @information: 我的
--> 
<template>
  <div id="mine">
    <!-- 顶部导航栏 -->
    <tabbar></tabbar>
    <div class="wrap">
      <div class="container">
        <!-- 表单 -->
        <el-form label-position="right" ref="refForm" label-width="80px" :model="pageForm" :rules="rules">
          <el-form-item label="姓名" prop="username">
            <el-input v-model="pageForm.username"></el-input>
          </el-form-item>
          <el-form-item label="年齡" prop="age">
            <el-input type="number" v-model.number="pageForm.age"></el-input>
          </el-form-item>
          <el-form-item label="性別" prop="sex">
            <el-radio-group v-model="pageForm.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="生日" prop="birthday">
            <el-date-picker v-model="pageForm.birthday" type="date" value-format="yyyy-MM-dd"  placeholder="请选择日期">
            </el-date-picker>
          </el-form-item>
          <!-- 按钮 -->
          <el-form-item class="btn-box">
            <el-button type="primary" @click="onSubmit()">提交</el-button>
            <el-button @click="onReset()">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import Tabbar from '@/components/Tabbar.vue'
import IForm from '@/interface/IForm'
import {Form as ElForm} from 'element-ui'

@Component({
  components: {
    'tabbar': Tabbar
  }
})
export default class Mine extends Vue {
  // 校验规则
  rules: any = {
    username: [
      {required: true, message: '请输入用户名称', trigger: 'blur'},
    ],
    age: [
      {required: true, type: 'number', message: '年龄必须为数字', trigger: 'blur'},
    ],
    sex: [
      {required: true, message: '请选择性别', trigger: 'change'},
    ],
    birthday: [
      {type: 'string', required: true, message: '请选择日期', trigger: 'change'}
    ],
  }


  // 计算属性：表单
  get pageForm(): IForm {
    return this.$store.state.mine.form
  }


  /**
   * @author: 殷鹏飞
   * @Date: 2020-07-10 10:15:09
   * @information: 提交
   */
  onSubmit(): void {
    (this.$refs.refForm as HTMLFormElement).validate((valid: boolean): void => {
      if (!valid) return;
      this.$store.commit('user/ADD_ITEM', this.pageForm)
      this.onReset()
      this.$message({
        message: '添加成功',
        type: 'success'
      });
    })
  }

  /**
   * @author: 殷鹏飞
   * @Date: 2020-07-10 10:15:09
   * @information: 重置
   */
  onReset(): void {
    const ref = <ElForm>this.$refs.refForm
    ref.resetFields()
    this.$store.commit('mine/CLEAR_FORM')
  }

}
</script>

<style lang="scss">
#mine {
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
      .el-date-editor.el-input, .el-date-editor.el-input__inner {
        width: 100%;
      }
      .el-form-item__content {
        text-align: left;
      }
      .btn-box {
        .el-form-item__content {
          text-align: center;
        }
      }
    }
  }

}
</style>