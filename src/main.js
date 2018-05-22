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
import Calendar from 'vue2-datepick';
Vue.use(Calendar);

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})