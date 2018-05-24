<template>
	<div class="mine">
		<headerTop 
		  ref="headerTop"
		  v-on:leftClick="leftClicks"
		  v-on:rightClick="rightClicks"
		  :title="title"
		  :iconLeft="iconLeft"
		  :leftText="leftText"
		  :rightText="rightText"></headerTop>
		<div class="mine_content">
			<div class="left">
				<div class="left_item" v-for="item in leftData" :key="item.id" @click="itemClick(item.id)">
					<p v-bind:style="[leftState==item.id?lps:lp]" class="lp">{{item.name}}</p>
				</div>
			</div>
			<div class="right">
				<div class="right_item" v-for="item in rightData" :key="item.id">
					<p v-bind:style="[rightState==item.id?rps:rp]" @click="itemRightClick(item.id)">{{item.name}}</p>
					<p class="rp2"><span>{{item.money}}</span>元/月</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import headerTop from '../public/headers/Headers'
	export default {
		name:'mine',
		data () {
			return {
				title:'列表页面',
				iconLeft:'iconfont icon-arrowleft',
				leftText:'返回',
				iconRight:'iconfont icon-arrowleft',
				rightText:'保存',
				messages:'我是Mine页面',
				leftState:1,
				rightState:null,
				leftData:[{
					id:1,
					name:'电视',
				},{
					id:2,
					name:'冰箱'
				},{
					id:3,
					name:'洗衣机'
				},{
					id:4,
					name:'空调'
				}],
				rightData:[{
					id:1,
					name:'小米',
					money:30
				},{
					id:2,
					name:'索尼',
					money:40
				},{
					id:3,
					name:'中兴',
					money:50
				},{
					id:4,
					name:'飞利浦',
					money:60
				}],
				lp:{
					textAlign:"center",
					paddingTop:"10px",
					paddingBottom:"10px"
				},
				lps:{
					textAlign:"center",
					paddingTop:"10px",
					paddingBottom:"10px",
					background:"white"
				},
				rp:{
					padding:"8px 20px",
					borderRadius:"5px",
					border:"1px solid #cccccc"
				},
				rps:{
					padding:"8px 20px",
					borderRadius:"5px",
					border:"1px solid blue"
				}
			}
			
		},
		methods:{
			itemClick(id) {
				this.leftState = id;
			},
			itemRightClick(id) {
				this.rightState = id;
			},
			leftClicks(itemId){
				console.log('parent:'+itemId);
				this.$router.push({path:'/main/home'});
			},
			rightClicks(itemId){
				console.log('parent:'+itemId);
				alert('保存列表页面成功！');
			}
		},
		components: {
			headerTop
		}
	}
</script>
<style lang="less">
    .mine {
    	height: 100%;
    	font-size:13px;
    }
	.mine_title {
		text-align: center;
		background: blue;
		padding-top: 10px;
		padding-bottom: 10px;
		color: white;
	}
	.mine_content {
		width: 100%;
		display: flex;
	}
	.left {
		position: absolute;
		margin: 0 0 0 1px;
		width: 30%;
		background: #e1e1e1;
		height: 100%;
		/* .lp {
			text-align:center;
			padding-top:10px;
			padding-bottom:10px;
		}
		.lps {
			text-align:center;
			padding-top:10px;
			padding-bottom:10px;
			background:white;
		} */
	}
	.right {
		width: 60%;
		margin-left:32%;
		.right_item{
			display:flex;
			margin:10px 10px;
			.rp2{
				line-height:40px;
				margin-left:20px;
				span{
					color:orange;
				}
			}
		}
	}
</style>