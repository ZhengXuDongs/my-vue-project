<template>
	<div>
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
	export default {
		data() {
			return {
				msg:'Hello Vuex',
			}
		},
		store,
		methods:{
			...mapMutations(['add','reduce']),
			...mapActions(['addAction','reduceAction'])
		},
		computed:{
			...mapState(["count"]),
			...mapGetters(["count"])
		}
	}
</script>