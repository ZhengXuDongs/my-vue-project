// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../public/iconfont/iconfont.css';
import {
	Tabbar,
	TabItem
} from 'mint-ui';
import store from './store/store.js'


Vue.use(ElementUI)

//判断登录过直接跳转主页，未登录就跳转登录页面
router.beforeEach((to, from, next) => {
	//判断是否需要验证登录
	if (to.matched.some(record => record.meta.requiresAuth)) {
		//console.log(0)
		//这里判断用户是否登录，我例子中是验证本地存储是否有user用户信息
		if (!localStorage.user) {
			//console.log(1)
			next()
		} else {
			//console.log(2)
			next({
				path: '/main/home'
			})
		}
	} else {
		console.log(3)
		next() // 确保一定要调用 next()
	}
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})