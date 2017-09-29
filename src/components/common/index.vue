<style>
    .layout-menu-left{
    	position: fixed;
	    top: 50px;
	    left: 0;
	    bottom: 0;
	    height: 100%;
	    overflow-y: auto;
	    background-color: #324157;
	    border-top: 2px solid #424f63;
    }
    .layout-menu-left .ivu-menu-light{
    	background-color: #324157;
    	color: #bfcbd9;
    }
    .layout-menu-left .ivu-menu-vertical.ivu-menu-light:after{
    	width: 0;
    }
    .ivu-menu{
    	background-color: #1f2d3d;
    	color: #bfcbd9;
    }
    .ivu-menu-vertical .ivu-menu-submenu-title:hover,.ivu-menu-vertical.ivu-menu-light .ivu-menu-item:hover{
    	background-color: #48576a;
    }

    .main-header{
    	background-color: #324157;
    	height: 50px;
    	margin: 0;
    	margin-bottom: 10px;
    	line-height: 50px;
    	position: fixed;
    	top: 0;
    	left: 0;
    	right: 0;
    	z-index: 9999;
    }
    .main-header .ivu-dropdown-item .ivu-icon{
    	vertical-align: middle;
    	margin-right: 5px;
    }
    .searchBox{
    	margin:9px 0;
    }
	.layout{
	    background: #f5f7f9;
	    position: relative;
	    overflow: hidden;
	    min-width:1200px;
	}
	.layout-content {
	    min-height: 600px;
	    margin:0 15px;
	    overflow: hidden;
	    background: #fff;
	    border-radius: 4px;
	    padding:0 24px;
	}
	.layout-header {
	    height: 60px;
	    background: #fff;
	    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
	}
	.position-div{
		height: 10px;
	}
	.flex{
		padding-top: 70px;
	}
</style>
<template>
<div class="layout">
	<div class="main-header">
		<Row>
			<Col span="3" style="color:#fff">
				<img src="./images/FFFF.png" style="margin-top: 5px; height:40px" />
			</Col>
			<Col span="15">
			    <div class="searchBox">
			    	<Input v-model="searchDetail" placeholder="请输入..." style="width: 400px">
						<Button slot="append">
							<Icon type="search" size="14"></Icon>
						</Button>
					</Input>
			    </div>
				
			</Col>
			<Col span="6">
				<div>
					<Dropdown style="margin-left: 20px">
				        <a href="javascript:void(0)">
				            userName
				        </a>
				        <DropdownMenu slot="list">
				            <DropdownItem>
				            	<Icon type="ios-person-outline" size="20"></Icon>
				            	个人
				           </DropdownItem> 
				            <DropdownItem>
				            	<Icon type="ios-gear-outline" size="20"></Icon>
				                设置
				           </DropdownItem>
				           <DropdownItem>
				           		<Icon type="log-out" size="20"></Icon>
				                退出
				           </DropdownItem>
				        </DropdownMenu>
				    </Dropdown>
				</div>
			</Col>
		</Row>
	</div>
	<Row class="flex">
		<i-col :span="spanLeft" class="position-div" ></i-col>
		<i-col :span="spanLeft" class="layout-menu-left">
				<Menu :theme="theme2" width="auto" :activeName="setActive" @on-select="routeTo" class="menu-box">
					<Submenu name="1">
	                    <template slot="title">
	                        <Icon type="ios-people" size="16"></Icon>
	                        <span class="layout-text">用户管理</span>
	                    </template>
	                    <MenuItem name="user-power">权限管理</MenuItem>
	                </Submenu>
	                <Submenu name="menu">
	                    <template slot="title">
	                        <Icon type="person" size="16"></Icon>
	                        <span class="layout-text">角色管理</span>
	                    </template>
	                    <MenuItem name="menu-roleList">角色列表</MenuItem>
	                    <MenuItem name="menu-addRole">添加角色</MenuItem>
	                </Submenu>
	                <Submenu name="files">
	                    <template slot="title">
	                    	<Icon type="document-text" size="16"></Icon>
	                        <span class="layout-text">文件管理</span>
	                    </template>
	                    <MenuItem name="files-add">文件上传</MenuItem>
	                </Submenu>
	                <Submenu name="product">
	                    <template slot="title">
	                        <Icon type="ios-paper" size="16"></Icon>
	                        <span class="layout-text">产品管理</span>
	                    </template>
	                    <MenuItem name="product-add">产品发布</MenuItem>
	                </Submenu>
	                <Submenu name="count">
	                    <template slot="title">  
	                        <Icon type="stats-bars" size="16"></Icon>
	                        <span class="layout-text">统计分析</span>
	                    </template>
	                    <MenuItem name="count-chart">销售图表</MenuItem>
	                </Submenu>
				</Menu>
			
		</i-col>
		<i-col :span="spanRight">
            <div class="layout-content">
                <div class="layout-content-main">
                    <transition mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
            <div class="layout-copy">
                2011-2016 &copy; SUN
            </div>
        </i-col>
	</Row>
</div>
</template>
<script>
export default{
  data () {
    return {
      searchDetail: '',
      theme2: 'light',
      spanLeft: 3,
      spanRight: 21
    }
  },
  computed: {
    setActive () {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {
    routeTo (name) {
      this.$router.push(name)
    }
  }
}
</script>

