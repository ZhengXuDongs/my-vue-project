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
	    <el-button @click="dialogVisible = true" type="primary">element-ui弹框</element></el-button>
	    <el-button @click="modalShowed = true" type="primary">自定义组件弹框</element></el-button>
	    <el-dialog
		  title="提示"
		  :visible.sync="dialogVisible"
		  width="80%">
		  <span>这是一段信息</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
	  	<modals :pStyle="pStyle" :show="modalShowed" >
	  		<div slot="modal_main">
	  			<div class="model_title" v-show="closeShowed">
	  				<i @click="closeModal()" class="iconfont icon-guanbi"></i>
	  			</div>
	  			<p>我是父组件的内容</p>
	  			<div class="btn_groups">
	  				  <el-button-group class="btn_group">
					  <el-button class="btn_exit" @click="closeModal()" type="info">取消</el-button>
					  <el-button type="primary">确定</el-button>
					</el-button-group>
	  			</div>
	  			
	  		</div>
	  	</modals>
	</div>
</template>

<script>
	import store from '../../store/store.js'
	import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';
	import headerTop from '../public/headers/Headers'
	import modals from '../public/modals/Modals'
	export default {
		data() {
			return {
				msg:'Hello Vuex',
				title:'计数页面',
				iconLeft:'iconfont icon-arrowleft',
				leftText:'返回',
				dialogVisible: false,
				pStyle:{
					width:'300px'
				},
				modalShowed:false,
				closeShowed:true
			}
		},
		store,
		methods:{
			...mapMutations(['add','reduce']),
			...mapActions(['addAction','reduceAction']),
			leftClicks(itemId){
				console.log('parent:'+itemId);
				this.$router.push({path:'/main/mine'});
			},
			closeModal() {
				this.modalShowed = false;
			}
		},
		computed:{
			...mapState(["count"]),
			...mapGetters(["count"])
		},
		components:{
			headerTop,
			modals
		}
	}
</script>

<style lang="less" scoped>
	.c_dialog{
		bottom: 0 !important;
    	position: fixed;
	}
	.model_title{
		text-align: right;
	    margin-right: 10px;
	    margin-top: 10px;
	}
	.btn_groups{
		display: flex;
	}
	.btn_group{
		margin: 60px auto 0;
	}
	.btn_exit{
		margin-right: 20px !important;
	}
</style>