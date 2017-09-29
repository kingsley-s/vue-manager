<style>
.formBox{
	width:386px;
}	
</style>
<template>
<div>
  <div class="layout-breadcrumb">
    <Breadcrumb>
      <Breadcrumb-item>角色管理</Breadcrumb-item>
      <Breadcrumb-item>添加角色</Breadcrumb-item>
    </Breadcrumb>
  </div>
  <div>
  <h2></h2>
  </div>
  <div class="formBox">
  	<i-form ref="formInline" :model="formInline" :rules="ruleInline" label-position="left" :label-width="80">
	    <FormItem prop="name" label="姓名">
		    <Input type="text" v-model="formInline.name" placeholder="请输入" style="width: 300px"></Input>
		</FormItem>
		<FormItem prop="gender" label="性别">
			<RadioGroup v-model="formInline.gender">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
      </RadioGroup>
		</FormItem>
		<FormItem prop="id" label="身份证号">
		    <Input type="text" v-model="formInline.id" placeholder="请输入" style="width: 300px"></Input>
		</FormItem>
		 <FormItem label="菜单">
        <Checkbox
            :indeterminate="indeterminate"
            :value="checkAll"
            @click.prevent.native="handleCheckAll">全选
        </Checkbox>
            <CheckboxGroup v-model="formInline.menu" @on-change="checkAllGroupChange">
                <Checkbox label="吃饭"></Checkbox>
                <Checkbox label="睡觉"></Checkbox>
                <Checkbox label="跑步"></Checkbox>
                <Checkbox label="看电影"></Checkbox>
            </CheckboxGroup>
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
      indeterminate: true,
      checkAll: false,
      formInline: {
        name: '',
        gender: '',
        id: '',
        menu: ['吃饭', '睡觉']
      },
      ruleInline: {
        name: [
          {required: true, message: '请填写用户名', trigger: 'blur'}
        ],
        gender: [
          {required: true, message: '请选择性别', trigger: 'change'}
        ],
        id: [
          {required: true, message: '请填写身份证号', trigger: 'blur'}
        ],
        menu: [
          {required: true, type: 'array', min: 1, message: '请至少选择一个菜单', trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    handleCheckAll () {
      if (this.indeterminate) {
        this.checkAll = false
      } else {
        this.checkAll = !this.checkAll
      }
      this.indeterminate = false
      if (this.checkAll) {
        this.formInline.menu = ['吃饭', '睡觉', '跑步', '看电影']
      } else {
        this.formInline.menu = []
      }
    },
    checkAllGroupChange (data) {
      if (data.length === 4) {
        this.indeterminate = false
        this.checkAll = true
      } else if (data.length > 0) {
        this.indeterminate = true
        this.checkAll = false
      } else {
        this.indeterminate = false
        this.checkAll = false
      }
    }
  }
}
</script>
<style lang="scss" scoped src="../../assets/scss/style.scss">