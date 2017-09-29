<style scoped>
	.wrapper{
		width: 100%;
		height: 100%;
		position: absolute;
		background: url(./images/bgbg.jpg) no-repeat center center;
		background-size: cover;
		left: 0;
		top: 0;
	}
	.wrapper .login{
		width: 350px;
		margin: 100px auto 0;
		padding: 10px;
		background: #fff;
		border-radius: 10px;
		-webkit-border-radius: 10px;
		-moz-border-radius: 10px;
	}
	.wrapper .login .logo{
		margin: 0 auto 20px;
	}
	.wrapper .login .ivu-btn{
		width: 100px;
		font-weight: 600;
	}
</style>
<template>
	<div class="wrapper">
		
		<div class="login">
			<img src="./images/000.png" class="logo"/>
			 <i-form ref="formInline" :model="formInline" :rules="ruleInline" >
				<FormItem prop="user">
				   <Input type="text" v-model="formInline.user" placeholder="用户名">
				   <Icon type="person" slot="prepend" size="20"></Icon>
				   </Input>
				</FormItem>
				<FormItem prop="password">
				    <Input type="password" v-model="formInline.password" placeholder="密码">
				        <Icon type="locked" size="20" slot="prepend"></Icon>
				    </Input>
				</FormItem>
				<FormItem>
				    <i-button size="large" type="primary" @click="handleSubmit('formInline')">登&nbsp;录</i-button>
				</FormItem>
		     </i-form>
				
		</div>
	</div>
        	
			   
        
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 6, max: 20, message: '密码长度在6-20位之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!')
          this.$router.push('/user-power')
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    }
  }
}
</script>
  