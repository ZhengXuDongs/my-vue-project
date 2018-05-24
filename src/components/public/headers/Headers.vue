<template>
	<div class="headers">
		<div class="lefts">
			<div @click="leftClick(111)" class="lefts_d">
				<i v-bind:class="iconLeft" />
				<p>{{leftText}}</p>
			</div>
			
		</div>
		<div class="centers">{{title}}</div>
		<div class="rights">
			<div @click="rightClick()" class="rights_d">
				<i v-bind:class="iconRight" />
				<p>{{rightText}}</p>
			</div>
			
		</div>
	</div>
</template>
<script>
	export default {
		name:'headers',
		data() {
			return{

			}
		},
		methods:{
			leftClick(itemId) {
				this.$emit('leftClick',itemId);//传递参数到父组件
			},
			rightClick() {
				this.$emit('rightClick');//不传递参数到父组件
			}
			/*leftClick() {
				alert('左边')
			},
			rightClick() {
				alert('右边')
			}*/
		},
		props:['title','iconLeft','iconRight','leftText','rightText']
	}
</script>
<style scoped>
	.headers{
		display: flex;
		height: 40px;
		line-height: 40px;
		background: blue;
		color: white;
		justify-content: space-between;
		padding: 0 10px;
	}
	.lefts{
		display: flex;
		width: 60px;
	}
	.lefts_d{
		display: flex;
	}
	.centes{
		
	}
	.rights{
		
		width: 60px;
	}
	.rights_d{
		display: flex;
		float: right;
	}
</style>