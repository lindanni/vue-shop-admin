<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="2">
          <img
            src="../assets/img/logo.png"
            alt=""
            class="home-logo"
          >
        </el-col>
        <el-col :span="18">
          <div class="name">电商后台管理系统</div>
        </el-col>
        <el-col :span="4">
          <button class="out-login" @click="outLogin">退出</button>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont icon-user"></i>
              <span>用户管理</span>
            </template>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                用户列表
                </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont icon-tijikongjian"></i>
              <span>权限管理</span>
            </template>
              <el-menu-item index="2-1">
                <i class="el-icon-menu"></i>
                角色列表
                </el-menu-item>
              <el-menu-item index="2-2">
                <i class="el-icon-menu"></i>
                权限列表
                </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="iconfont icon-shangpin"></i>
              <span>商品管理</span>
            </template>
              <el-menu-item index="3-1">
                <i class="el-icon-menu"></i>
                商品列表
                </el-menu-item>
              <el-menu-item index="3-2">
                <i class="el-icon-menu"></i>
                分类参数
                </el-menu-item>
              <el-menu-item index="3-3">
                <i class="el-icon-menu"></i>
                商品分类
                </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="iconfont icon-danju"></i>
              <span>订单管理</span>
            </template>
              <el-menu-item index="4-1">
                <i class="el-icon-menu"></i>
                订单列表
                </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="iconfont icon-baobiao"></i>
              <span>数据统计</span>
            </template>
              <el-menu-item index="5-1">
                <i class="el-icon-menu"></i>
                数据报表
                </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'Home',
  components: {},
  beforeCreate () {
    const token = localStorage.getItem('token')
    if (!token) {
      this.$message({
        type: 'error',
        message: '请先登录'
      })
    }
  },
  methods: {
    outLogin () {
      localStorage.removeItem('token')
      this.$message({
        type: 'success',
        message: '退出成功'
      })
      this.$router.push('/')
    }
  }
}
</script>
<style lang="stylus" scoped>
.el-container {
  height: 100%;
}

img {
  width: 40px;
  height: 40px;
  margin-top: 10px;
}

.name {
  color: #ffffff;
  font-size: 20px;
  line-height: 60px;
}

.out-login {
  float: right;
  cursor: pointer;
  margin-top: 15px;
  border: none;
  color: #333;
  width: 40px;
  height: 30px;
  border-radius: 3px;
  background-color: #fff;
}

.el-header {
  background-color: #373f41;
}

.el-aside {
  background-color: #333744;
}
</style>
