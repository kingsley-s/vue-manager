<style>
	.upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .upload-list img{
        width: 100%;
        height: 100%;
    }
    .upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .upload-list:hover .upload-list-cover{
        display: block;
    }
    .upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
    .formBox{
    	width: 600px;
    }
</style>
<template>
	<div class="productAdd">
		<div class="layout-breadcrumb">
		    <Breadcrumb>
		      <Breadcrumb-item>产品管理</Breadcrumb-item>
		      <Breadcrumb-item>产品发布</Breadcrumb-item>
		    </Breadcrumb>
		</div>
		<div class="formBox">
		  	<i-form ref="formInline" :model="formInline" :rules="ruleInline" label-position="left" :label-width="80">
		  		<FormItem prop="productImages" label="产品图片">
				    <div>
				    	<div class="upload-list" v-for="item in uploadList">
					        <template v-if="item.status === 'finished'">
					            <img :src="item.url">
					            <div class="upload-list-cover">
					                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
					                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
					            </div>
					        </template>
					        <template v-else>
					            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
					        </template>
					    </div>
			  			<Upload ref="upload" :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="2048" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" action="//jsonplaceholder.typicode.com/posts/" style="display: inline-block;width:58px;">
				        <div style="width: 58px;height:58px;line-height: 58px;">
				            <Icon type="camera" size="20"></Icon>
				        </div>
				    	</Upload>
					    <Modal title="查看图片" v-model="visible">
					        <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
					    </Modal>
			  		</div>
				</FormItem>
			    <FormItem prop="productName" label="产品名称">
				    <Input type="text" v-model="formInline.productName" placeholder="请输入" ></Input>
				</FormItem>
				<FormItem prop="productDescription" label="产品描述">
				    <Input type="textarea" v-model="formInline.productDescription" placeholder="请输入" :autosize="{minRows: 2,maxRows: 5}" size="large"></Input>
				</FormItem>
				<FormItem prop="productPrice" label="产品价格">
				    <Input type="text" v-model="formInline.productPrice" placeholder="请输入" ></Input>
				</FormItem>
				<FormItem>
					<Button type="primary">提交</Button>
		            <Button type="ghost" style="margin-left: 8px">取消</Button>
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
        productImages: '',
        productName: '',
        productDescription: '',
        productPrice: ''
      },
      ruleInline: {
        productName: [
          {required: true, message: '请填写产品名称', trigger: 'blur'}
        ],
        productDescription: [
          {required: true, message: '请填写产品描述', trigger: 'blur'}
        ],
        productPrice: [
          {required: true, type: 'number', message: '请填写产品价格', trigger: 'blur'}
        ]
      },
      imgName: '',
      visible: false,
      uploadList: ''
    }
  },
  methods: {
    handleView (name) {
      this.imgName = name
      this.visible = true
    },
    handleRemove (file) {
      const fileList = this.$refs.upload.fileList
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
    },
    handleSuccess (res, file) {
      file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar'
      file.name = '7eb99afb9d5f317c912f08b5212fd69a'
    },
    handleFormatError (file) {
      this.$Notice.config({
        top: 70
      })
      this.$Notice.warning({
        title: '文件格式不正确',
        desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
      })
    },
    handleMaxSize (file) {
      this.$Notice.config({
        top: 70
      })
      this.$Notice.warning({
        title: '超出文件大小限制',
        desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
      })
    },
    handleBeforeUpload () {
      const check = this.uploadList.length < 5
      if (!check) {
        this.$Notice.warning({
          title: '最多只能上传 5 张图片。'
        })
      }
      return check
    }
  },
  mounted () {
    this.uploadList = this.$refs.upload.fileList
  }
}
</script>
<style lang="scss" scoped src="../../assets/scss/style.scss">