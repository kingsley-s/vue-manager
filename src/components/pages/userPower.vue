<template>
<div class="role-list">
  <div class="layout-breadcrumb">
    <Breadcrumb>
      <Breadcrumb-item>用户管理</Breadcrumb-item>
      <Breadcrumb-item>权限管理</Breadcrumb-item>
    </Breadcrumb>
  </div>
  <div class="content">
    <div class="position-table">
      <Table border :columns="columns1" :data="data1" @on-selection-change="tableSelect"></Table>
    </div>
    <div class="box">
      <div class="deleteBox">
        <Button type="error" icon="trash-a" :disabled="ifChoose" @click="batchDelete">批量删除</Button>
      </div>
      <div class="pageBox">
        <Page :total="100" show-elevator></Page>
      </div>
    </div>
  </div>
</div>

</template>
<script>
export default {
  data () {
    return {
      ifChoose: true,
      columns1: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '状态',
          key: 'status'
        },
        {
          title: '权限',
          key: 'power'
        },
        {
          title: '时间',
          key: 'time'
        },
        {
          title: '操作',
          key: 'action',
          width: 200,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small',
                  icon: 'edit'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '修改'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small',
                  icon: 'trash-a'
                },
                on: {
                  click: (index) => {
                    this.$Modal.confirm({
                      title: '确认提示',
                      content: '此操作将删除选择数据, 是否继续?',
                      okText: '确定',
                      cancelText: '取消',
                      onOk: () => {
                        this.data1.splice(index, 1)
                        this.$Message.success('删除成功')
                      }
                    })
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      data1: [
        {
          name: '王晓明',
          status: '已授权',
          power: '管理员',
          time: '2017-09-14'
        },
        {
          name: '黄晓明',
          status: '已授权',
          power: '超级管理员',
          time: '2017-09-14'
        },
        {
          name: '王明月',
          status: '已授权',
          power: '普通用户',
          time: '2017-09-14'
        },
        {
          name: '李小红',
          status: '已授权',
          power: '普通用户',
          time: '2017-09-14'
        }
      ]

    }
  },
  methods: {
    tableSelect (selection) {
      console.log(selection)
      if (selection.length !== 0) {
        this.ifChoose = false
      } else {
        this.ifChoose = true
      }
    },
    batchDelete () {
      this.$Modal.confirm({
        closable: true,
        title: '确认提示',
        content: '此操作将批量删除选择数据, 是否继续?',
        okText: '确定',
        cancelText: '取消',
        onOk: () => {
          this.$Message.success('删除成功')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped src="../../assets/scss/style.scss">