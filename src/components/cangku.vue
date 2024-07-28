<template>
  <div class="cangku-main">
    <div class="demo-type">
      <div>
        <el-avatar :icon="UserFilled" />
      </div>
      <div>
        <el-avatar src="../../image/baiZhu1.jpg" />
      </div>

      <div>
        <el-avatar>Xie</el-avatar>
      </div>
    </div>

    <el-upload
      class="upload-demo"
      drag
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
    >
      <el-icon class="el-icon--upload">
        <upload-filled />
      </el-icon>
      <div class="el-upload__text">
        把文件拖拽到此处
        <em>或者点击上传</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">不要放小黄片，要被塞满了</div>
      </template>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
import { UploadFilled } from "@element-plus/icons-vue";
import { UserFilled } from "@element-plus/icons-vue";
</script>

<style scoped>
.cangku-main{
    margin-top: 50px;
}

.demo-type {
  display: flex;
}
.demo-type > div {
  flex: 1;
  text-align: center;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}
</style>