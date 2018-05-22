<template>
	<div class="login">
		<div class="header_img"></div>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="login_form">
			<el-form-item prop="account">
				<el-input placeholder="请输入账号"
				class="input_text_1"
				prefix-icon="iconfont icon-account"
				v-model="ruleForm.account"
				clearable/>
			</el-form-item> 
			<el-form-item prop="password">
				<el-input placeholder="请输入密码"
				class="input_text_2"
				prefix-icon="iconfont icon-jiesuo"
				v-model="ruleForm.password"
				type="password"
				clearable/>
			</el-form-item>
			
			<el-form-item class="button_group">
				<el-button @click="onLogin('ruleForm')" class="btn_login" type="primary">登录</el-button>
				<el-button @click="onRegister('ruleForm')" class="btn_register" type="primary">注册</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "login",
		data () {
			return {
				ruleForm: {
					account:'',
					password:''
				},
				rules:{
					account: [{required:true, message:'请输入用户名',trigger:'blur'}],
					password:[{required:true, message:'请输入密码',trigger: 'blur'}]
				}
			};
		},
		methods: {
			onLogin(formName) {
				this.$refs[formName].validate((valid) => {
				          if (valid) {
				          	const user = {
				          		name:this.ruleForm.account,
				          		age:25,
				          		address:'重庆市渝北区'
				          	};
				            window.localStorage.setItem("user",JSON.stringify(user));
				            this.$router.push({path:'/main/home'})
				          } else {
				            console.log('error submit!!');
				            return false;
				          }
				        });
			},
			onRegister(formName) {
				/*this.$refs[formName].resetFields();*/
				this.$router.push({name:'register'});
			}
		}
	}
</script>

<style scoped>
	.el-form-item{
		margin:0 !important;;
		padding: 0;
	}
	.el-form-item__error{
		left: 15px !important;
	}
	.login{
		position: fixed;
		width: 100%;
		height: 100%;
		background: #317ef3;
	}
	.header_img{
		width: 80px;
		height: 80px;
		background-image: url("../../../public/image/1.jpg");
		border-radius: 40px;
		margin: 150px auto 0;
	}
	.login_form{
		background: white;
		margin: 10px 40px;
		height: 200px;
		border-radius: 5px;
		box-shadow: 0 0 3px #000;
	}
	.input_text_1{
		width: 90%;
    	margin: 30px 15px 0px;
	}
	.input_text_2{
		width: 90%;
    	margin: 20px 15px 0px;
	}
	.button_group{
		display: flex;
		width: 220px;
		margin:20px auto !important;
	}
	.btn_login{
		width: 100px;
	}
	.btn_register{
		width: 100px;
	}
</style>