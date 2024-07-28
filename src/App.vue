<template>
  <div id="app">
    <!-- <link rel="stylesheet" href="/src/style.css" /> -->
    <el-container>
      <el-header class="header">
        <!-- 上方导航栏 -->
        <div class="nav-links">
          <router-link to="/" class="router-link">首页</router-link>
          <router-link to="/date" class="router-link">日历</router-link>
          <router-link to="/cangku" class="router-link">仓库</router-link>
          <router-link to="/chatroom" class="router-link">聊天室</router-link>
          <router-link to="/gameroom" class="router-link">游戏厅</router-link>
        </div>
        <!-- 右上角登录 -->
        <div class="login-link">
          <router-link to="/login" class="router-link">登录</router-link>
        </div>
      </el-header>

      <!-- 正义切割 -->
      <el-main class="main-content" style="padding:0 8px 10px">
        <router-view></router-view>
      </el-main>

      <!-- 正义切割 -->
      <el-footer class="footer">
        <FooterComponent></FooterComponent>
      </el-footer>
    </el-container>

    <!-- 返回顶部按钮 -->
    <el-button style="padding: 20px;" v-show="showBackToTop" @click="scrollToTop" class="back-to-top"
      type="primary">👆</el-button>


  </div>

</template>

<script>
import FooterComponent from "/src/components/footer.vue";

export default {
  components: {
    FooterComponent
  },

  name: "App",
  data() {
    return {
      showBackToTop: false
    };
  },

  methods: {
    // 返回顶部
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    handleScroll() {
      this.showBackToTop = window.scrollY > 200;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style scoped>
@import "style.css";
</style>
