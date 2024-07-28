// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
//组件引入

import home from '../components/home.vue'

import login from '../components/login.vue'
import zhuce from '../components/zhuce.vue'
import chatroom from '../components/chatroom.vue'
import date from '../components/date.vue'
import cangku from '../components/cangku.vue'
import gameroom from '../components/gameroom.vue'
// 首页子路由
import zhuye from '../components/home/zhuye.vue'
import zuixin from '../components/home/zuixin.vue'
import remen from '../components/home/remen.vue'
//date子路由
import chaxun from '../components/date/chaxun.vue'
import zhufu from '../components/date/zhufu.vue'
import xuyuan from '../components/date/xuyuan.vue'


// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // 首页及其子页（主页，最新消息，热门）
    {
      path: '/', component: home,
      children: [
        { path: '/', component: zhuye },
        { path: 'zhuye', component: zhuye },
        { path: 'zuixin', component: zuixin },
        { path: 'remen', component: remen },
      ],
    },
    { path: '/login', component: login },
    { path: '/zhuce', component: zhuce },
    // 日历及子页面（查询、祝福、许愿）
    {
      path: '/date', component: date,
      children: [
        { path: '/', component: chaxun },
        { path: 'chaxun', component: chaxun },
        { path: 'zhufu', component: zhufu },
        { path: 'xuyuan', component: xuyuan },
      ],
    },
    { path: '/cangku', component: cangku }, //仓库
    { path: '/chatroom', component: chatroom },  //聊天室
    { path: '/gameroom', component: gameroom }  //游戏厅
  ],
})

export default router
