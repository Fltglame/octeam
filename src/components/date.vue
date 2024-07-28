<template>
  <div class="common-layout">
    <el-container>
      <el-container>
        <el-aside width="200px" class="aside">
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <router-link to="/date/chaxun" class="link">
            <el-menu-item index="1">
              生日/许愿查询
            </el-menu-item>
          </router-link>
            <router-link to="/date/zhufu" class="link">
            <el-menu-item index="2">
              生日祝福
            </el-menu-item>
          </router-link>
          <router-link to="/date/xuyuan" class="link">
            <el-menu-item index="3">
              许愿礼物
            </el-menu-item>
          </router-link>
          </el-menu>
        </el-aside>

        <el-main class="main">
          <el-row :gutter="20">
            <router-view></router-view>
            
            <el-col :span="8">
              <el-calendar class="calendar" />
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
/* 设置首页容器样式 */
html,
body,
#app {
  height: 100%;
  margin: 0px;
  padding: 0px;
}

.common-layout {
  position: relative;
  padding: 50px 0;
  height: 100%;
}

.header {
  display: flex;
  align-items: center;
  background-color: #409eff;
  color: #fff;
  padding: 0 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-right: 30px;
}

.menu {
  flex: 1;
}

.aside {
  background-color: #d3dce6;
  color: #333;
}

.main {
  background-color: #e9eef3;
  color: #333;
  padding: 20px;
}

.grid-content {
  padding: 20px;
  background: #fff;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.el-menu {
  background-color: transparent;
  color: #fff;
}

.calendar {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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