<template>
	<div class="register">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
			<el-form-item prop="user_type" class="user_type">
				<el-radio-group v-model="ruleForm.user_type">
				    <el-radio label="个人用户"></el-radio>
				    <el-radio label="企业用户"></el-radio>
				  </el-radio-group>
			</el-form-item>
			<el-form-item prop="account" label="账号：">
				<el-input
				  placeholder="请输入用户名"
				  v-model="ruleForm.account"
				  clearable>
				</el-input>
			</el-form-item>
			<el-form-item prop="phone" label="电话：">				
				<el-input
				  placeholder="请输入电话"
				  v-model="ruleForm.phone"
				  clearable>
				</el-input>
			</el-form-item>
			<el-form-item prop="email" label="邮箱：">				
				<el-input
				  placeholder="请输入邮箱"
				  v-model="ruleForm.email"
				  clearable>
				</el-input>
			</el-form-item>
			<el-form-item prop="age" label="出生年月：">
				<el-col :span="11">
			     <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.age" style="width: 100%;"></el-date-picker>
			    </el-col>
			</el-form-item>
			<el-form-item prop="address" label="联系地址：">				
				<el-input
				  placeholder="请输入联系地址"
				  v-model="ruleForm.address"
				  clearable>
				</el-input>
			</el-form-item>
			<el-form-item prop="password" label="密码：">
				<el-input
				  placeholder="请输入密码"
				  v-model="ruleForm.password"
				  type="password"
				  clearable>
				</el-input>
			</el-form-item>
			<el-form-item prop="repassword" label="确认密码：">		
				<el-input
				  placeholder="请再次输入密码"
				  v-model="ruleForm.repassword"
				  type="password"
				  clearable>
				</el-input>
			</el-form-item>
			<!-- <el-form-item class="r_button">
				<el-button class="r_button_d" @click="onRegister('ruleForm')" type="primary">注册</el-button>
			</el-form-item> -->
		</el-form>
		<div class="r_button">
			<el-button class="r_button_d" @click="onRegister('ruleForm')" type="primary">注册</el-button>
		</div>
		
	</div>
</template>

<script>
	export default {
		name:'register',
		data () {
			var validatePass = (rule, value, callback) => {
				if(value == ''){
					callback(new Error('请输入密码'));
				}else {
					if(this.ruleForm.repassword != '') {
						//this.$refs.ruleForm.validateFiled('repassword');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(value == ''){
					callback(new Error('请再次输入密码'));
				}else if(value != this.ruleForm.password){
					callback(new Error('两次输入密码不一致！'));
				}else{
					callback();
				}
			}
			return {
         		ruleForm:{
         			account:'',
         			phone:'',
         			password:'',
         			repassword:'',
         			email:'',
         			age:'',
         			address:'',
         			user_type:'',
         			type:''
         		},
         		rules:{
         			account: [
         				{ required: true,message:'请输入账号',trigger: 'blur'}
         			],
         			phone: [
         				{required: true,message:'请输入手机号',trigger: 'blur'}
         			],
         			email: [
         				{required: true,message:'请输入邮箱',trigger: 'blur'}
         			],
         			age: [
         				{required: true,message:'请选择出生日期',trigger: 'blur'}
         			],
         			address: [
         				{required: true,message:'请输入联系地址',trigger: 'blur'}
         			],
         			user_type: [
         				{required: true,message:'请选择用户类型',trigger: 'change'}
         			],
         			password: [
         				{validator: validatePass, trigger:'blur'}
         			],
         			repassword: [
         				{validator: validatePass2, trigger:'blur'}
         			]
         		}
			}
		},
		methods:{
	    	onRegister(formName) {
	    		var user = {
	    			account:this.ruleForm.account,
         			phone:this.ruleForm.phone,
         			email:this.ruleForm.email,
         			age:this.ruleForm.age,
         			address:this.ruleForm.address,
         			user_type:this.ruleForm.user_type,
	    		};
	    		console.log(user,formName)
	    		this.$refs[formName].validate((valid) => {
	    			/*console.log(valid)*/
	    			if(valid){
	    				window.localStorage.setItem('user',JSON.stringify(user));
	    			this.$router.push({path:'main/home'})
	    			}
	    		});
	    		
	    	}
   		}

	}
</script>
<style>
	.input_text_1{
		width: 90%;
    	margin: 30px 15px 0px;
	}
	.el-form-item{
		display: flex;
		margin-left: 20px;
	}
	.user_type{
		width:200px;
		margin: 0 auto 20px;
	}
	.el-input--prefix .el-input__inner {
	    padding-left: 30px;
	    width: 220px;
	}
	.el-form-item__label {
		width: 100px !important;
	}
	.form {
		margin-top: 20px;
	}
	.r_button {
		display: flex;
	}
	.r_button_d {
		margin: 0 auto;
		width: 300px;
	}
</style>