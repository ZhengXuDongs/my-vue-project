<template>
	<div>
		<headerTop 
		  ref="headerTop"
		  v-on:leftClick="leftClicks"
		  :title="title"
		  :iconLeft="iconLeft"
		  :leftText="leftText"></headerTop>
		<h2>{{msg}}</h2>
		<hr/>
		<h3>{{count}}</h3>
		<div>
			<button @click="add(2)">加1</button>
			<button @click="reduce">减1</button>
		</div>
		<p>
	      <button @click="addAction">+</button>
	      <button @click="reduceAction">-</button>
	    </p>
	</div>
</template>

<script>
	import store from '../../store/store.js'
	import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';
	import headerTop from '../public/headers/Headers'
	export default {
		data() {
			return {
				msg:'Hello Vuex',
				title:'计数页面',
				iconLeft:'iconfont icon-arrowleft',
				leftText:'返回',
			}
		},
		store,
		methods:{
			...mapMutations(['add','reduce']),
			...mapActions(['addAction','reduceAction']),
			leftClicks(itemId){
				console.log('parent:'+itemId);
				this.$router.push({path:'/main/mine'});
			}
		},
		computed:{
			...mapState(["count"]),
			...mapGetters(["count"])
		},
		components:{
			headerTop
		}
	}
</script>