import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Main from '@/components/main/Main'
import Home from '@/components/home/Home'
import Mine from '@/components/mine/Mine'
import Register from '@/components/register/Register'
import Count from '@/components/count/Count'
import PersonCenter from '@/components/personCenter/PersonCenter'


Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'login',
		component: Login,
		meta: {
			requiresAuth: true
		}
	}, {
		path: '/main',
		component: Main,
		children: [{
			path: 'home',
			component: Home
		}, {
			path: 'mine',
			component: Mine
		}, {
			path: 'count',
			component: Count
		}, {
			path: 'person-center',
			component: PersonCenter
		}]
	}, {
		path: '/register',
		name: 'register',
		component: Register
	}]
})