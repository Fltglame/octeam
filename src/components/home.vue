<template>
  <div class="common-layout" style="padding: 0;">
    <el-carousel style="width:100%" interval="4000" arrow="always" height="300px" class="carousel">
      <el-carousel-item v-for="item in carouselItems" :key="item">
        <img :src="item" class="carousel-image" />
      </el-carousel-item>
    </el-carousel>

    <el-container>
      <br />

      <el-header class="header">
        <div class="logo">OC日报📰</div>
        <el-menu mode="horizontal" class="menu"></el-menu>
      </el-header>

      <el-container>
        <el-aside width="200px" class="aside">
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <router-link to="/zhuye" class="link">
            <el-menu-item index="1">
             主页
            </el-menu-item>
          </router-link>
          <router-link to="/zuixin" class="link">
            <el-menu-item index="2">
              最新🍉
            </el-menu-item>
          </router-link>
          <router-link to="/remen" class="link">
            <el-menu-item index="3">
              热门事件
            </el-menu-item>
          </router-link>
          </el-menu>
        </el-aside>

        <el-main class="main">
          <router-view></router-view>
          <el-skeleton />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      carouselItems: [
        "/image/niHonn.jpg",
        "/image/OCteam.jpg",
        "/image/OCteam2.jpg"
      ]
    };
  }
};
</script>

<style scoped>
/* 重置首页容器样式，去掉所有边距 */
.el-container {
  margin: 0;
  padding: 0;
  height: 100%;
  position: relative;
}

/* 确保.common-layout没有左右边距 */
.common-layout {
  margin-top: 60px;
  /* 移除顶部边距 */
  padding: 0;
  /* 确保没有左右内边距 */
}

/* 其他样式保持不变 */
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-menu {
  background-color: #d3dce6;
}

.carousel {
  margin-top: 20px;
}

.carousel-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

/* 链接样式 */
.link {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  transition: color 0.3s ease;
}
.link:hover {
  color: #409eff; /*鼠标悬停的颜色*/
}
.el-menu-item.is-active .link {
  color: #409eff; /*激活状态的颜色*/
}
</style>
