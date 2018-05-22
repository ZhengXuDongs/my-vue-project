<template>
	<div class="home">
		<div class="lunbo">
			<el-carousel :interval="5000" arrow="always">
			    <el-carousel-item v-for="(item,index) in lunboData" :key="index">
			      <img class="lub" v-bind:src="item.url"/>
			    </el-carousel-item>
			</el-carousel>
		</div>
		<p class="chuxiao">今日促销</p>
		<div class="healthy">
			<div class="healthy_d">
				<i class="iconfont icon-diamond-o"/>
				<p>健康食材</p>
			</div>
			<div class="healthy_d">
				<i class="iconfont icon-jijianfasong-xianxing"/>
				<p>最快30分钟达</p>
			</div>
			<div class="healthy_d">
				<i class="iconfont icon-yunshuzhongwuliu-xianxing"/>
				<p>满18包邮</p>
			</div>
		</div>
		<div class="under_line"></div>
		<div class="xia_type">
			<div class="xia_type_d" v-for="item in xiaData">
				<img class="xia_img" v-bind:src="item.url" />
				<p>{{item.remark}}</p>
			</div>
		</div>
	</div>
</template>


<script type="text/javascript">
	export default {
		name:'home',
		data () {
			return {
				lunboData:[{
					url:require('../../../public/image/timg[1].jpg')
				},
				{
					url:require('../../../public/image/timg[2].jpg')
				},
				{
					url:require('../../../public/image/timg[3].jpg')
				},
				{
					url:require('../../../public/image/timg[4].jpg')
				}],
				xiaData:[{
					id:1,
					url:require('../../../public/image/timg[5].jpg'),
					remark:'小虾1'
				},
				{
					id:2,
					url:require('../../../public/image/timg[6].jpg'),
					remark:'小虾2'
				},
				{
					id:3,
					url:require('../../../public/image/timg[7].jpg'),
					remark:'小虾3'
				},
				{
					id:4,
					url:require('../../../public/image/timg[8].jpg'),
					remark:'小虾4'
				},
				{
					id:5,
					url:require('../../../public/image/timg[6].jpg'),
					remark:'小虾5'
				},
				{
					id:6,
					url:require('../../../public/image/timg[8].jpg'),
					remark:'小虾6'
				},
				{
					id:7,
					url:require('../../../public/image/timg[7].jpg'),
					remark:'小虾7'
				},
				{
					id:8,
					url:require('../../../public/image/timg[5].jpg'),
					remark:'小虾8'
				}]
			}
		}
	}
</script>
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .lub {
	width: 100%;
	height: 200px;
  }
	.el-carousel__container {
		height: 200px !important;
	}
	.chuxiao {
		text-align: center;
		padding-top: 5px;
		padding-bottom: 5px;
		background: orange;
		color: white;
		margin-top: 10px;
	}
	.healthy {
	    flex-wrap: wrap;
	    display: flex;
	    justify-content: space-between;
	    margin: 0 12px;
	}
	.healthy_d {
		display: flex;
	    text-align: center;
	    line-height: 35px;
	}
	.under_line{
		border-top: 1px solid #cccccc;
		margin: 5px 6px 0;
	}
	.xia_type{
		width: 100%;
	    flex-wrap: wrap;
	    display: flex;
	    justify-content: space-between;
	    padding-bottom: 20px;
	}
	.xia_type_d{
		width: 20%;
	    text-align: center;
	    margin-right: 12px;
	    margin-top: 20px;
	    border-radius: 5px;
	}
	.xia_img{
		width: 40px;
		height: 30px;
	}
</style>