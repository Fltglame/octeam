<template>
  <div class="form-container">
    <el-form :model="form" label-width="120px" style="max-width: 600px">
      <el-form-item label="君の名">
        <el-input v-model="form.name" />
      </el-form-item>

      <el-form-item label="账号">
        <el-input 
          v-model.lazy="zhanghao" 
          aria-label="账号"
          type="zhanghao"
          placeholder="请输入账号" />
      </el-form-item>

      <el-form-item label="密码">
        <el-input
          v-model.lazy="mima"
          type="password"
          placeholder="请输入密码"
          show-password/>
      </el-form-item>

      <el-form-item label="确认密码">
        <el-input
          v-model.lazy="querenmima"
          type="password"
          placeholder="请确认密码"
          show-password/>
      </el-form-item>

      <el-form-item label="出生日期">
        <el-date-picker
          v-model="form.date1"
          type="date"
          placeholder="例2000-01-01"
          style="width: 100%"/>
      </el-form-item>

      <el-form-item label="你是南通吗">
        <el-switch v-model="form.delivery" />
      </el-form-item>

      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox value="Online activities" name="type">Online activities</el-checkbox>
          <el-checkbox value="Promotion activities" name="type">Promotion activities</el-checkbox>
          <el-checkbox value="Offline activities" name="type">Offline activities</el-checkbox>
          <el-checkbox value="Simple brand exposure" name="type">Simple brand exposure</el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio value="Sponsor">Sponsor</el-radio>
          <el-radio value="Venue">Venue</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">注册</el-button>
        <router-link to="/login">
          <el-button>取消</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const mima = ref('')
const querenmima = ref('')
const zhanghao = ref('')

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.el-form {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.el-form-item {
  margin-bottom: 20px;
}

.el-input__inner,
.el-date-editor,
.el-textarea__inner {
  width: 100%;
}

.el-button {
  margin-right: 10px;
}

.el-form-item:last-of-type .el-button {
  margin-right: 0;
}
</style>
