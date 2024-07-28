//main.js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import { VueElement } from 'vue'
import VueAxios from 'vue-axios'
import router from './router/index.js'
import App from './App.vue'
// import Vue from 'vue'

createApp(App)
    .use(ElementPlus)
    .use(VueAxios, axios)
    .use(router)
    .mount('#app')
