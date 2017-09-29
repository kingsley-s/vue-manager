<template>
	<div class="filesBox">
		<div class="layout-breadcrumb">
		    <Breadcrumb>
		      <Breadcrumb-item>文件管理</Breadcrumb-item>
		      <Breadcrumb-item>上传文件</Breadcrumb-item>
		    </Breadcrumb>
		</div>
		<div>
			<Upload multiple :show-upload-list="true" type="drag" action="//jsonplaceholder.typicode.com/posts/" :format="['zip','rar','word']" :max-size="4096" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize">
        		<div style="padding: 20px 0">
            		<Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            		<p>点击或将文件拖拽到这里上传</p>
        		</div>
    		</Upload>
		</div>
	</div>
</template>
<script>
export default {
  methods: {
    handleFormatError (file) {
      this.$Notice.config({
        top: 70
      })
      this.$Notice.warning({
        title: '文件格式不正确',
        desc: '文件' + file.name + '格式不正确，请上传 zip、rar 或 word 格式的图片。'
      })
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: '超出文件大小限制',
        desc: '文件' + file.name + '太大，不能超过 4M。'
      })
    }
  }
}
</script>
<style lang="scss" scoped src="../../assets/scss/style.scss">