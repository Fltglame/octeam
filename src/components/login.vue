<template>
  <div class="common-layout">
    <el-form class="login-form" label-position="top">
      <el-form-item label="账号" class="form-item">
        <el-input v-model.lazy="zhanghao" aria-label="账号" type="zhanghao" placeholder="请输入账号" />
      </el-form-item>

      <el-form-item label="密码" class="form-item">
        <el-input v-model.lazy="mima" type="password" placeholder="请输入密码" show-password />
      </el-form-item>

      <div class="button-group">
        <el-button type="primary">登录</el-button>
        <router-link class="zhuce" to="/zhuce">
          <el-button style="width: 100%;" type="default">注册</el-button>
        </router-link>
        
      </div>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const mima = ref("");
const zhanghao = ref("");
</script>

<style scoped>


.common-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../../image/OCteam.jpg");
  /* opacity: 0.5; 设置透明度为0.5 */
  background-size: cover; /* 使背景图片覆盖整个容器 */
  background-position: center center; /* 将背景图片居中对齐 */
  background-repeat: no-repeat; /* 防止背景图片重复 */
  /* background-attachment: fixed; 背景图片随页面滚动固定 */
  margin-top: 40px;
}


.login-form {
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  /* height: 50vh; */
}

.form-item {
  margin-bottom: 20px;
}

.el-input__inner {
  width: 100%;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.el-button {
  width: 48%;
}

.zhuce{
  width: 144px;
}


</style>