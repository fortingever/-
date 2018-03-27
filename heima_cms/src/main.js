//引入vue
import Vue from 'vue'
//引入vue文件
import App from './App.vue'
//引入头部文件
import { Header,Button } from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
//引入router路由----------------------------
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/Home.vue'
import News from './components/News.vue'

const router = new VueRouter({
  routes: [
		{ path: '/home', component: Home },
		{ path: '/news',component: News}
  ],
  linkActiveClass:'now'
})
// ---------------------------------------
import './lib/mui/css/mui.min.css'
import './asstes/css/index.css'


//创建vue对象
new Vue({
	el: "#app",
	render: c => c(App),
	router


})