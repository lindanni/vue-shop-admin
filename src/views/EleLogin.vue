<template>
  <div class="login">
    <div class="login_content">
      <div class="logo_wrap">
        <img
          src="../assets/img/logo.png"
          alt=""
          class="logo"
        >
      </div>
      <el-form
        :model="formdata"
        ref="loginForm"
        label-width="55px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="账号"
          prop="username"
          :rules="[
            { required: true, message: '账号不能为空'}
        ]"
        >
          <el-input
            type="text"
            v-model="formdata.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :rules="[
            { required: true, message: '密码不能为空'}
        ]"
        >
          <el-input
            type="password"
            v-model="formdata.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item class="button_wrap">
          <el-button
            type="primary"
            @click="submitForm('loginForm')"
          >提交</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formdata: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const res = await this.$http.post('login', this.formdata)
          const {
            data,
            meta: { msg, status }
          } = res.data
          if (status === 200) {
            this.$message({
              type: 'success',
              message: msg
            })
            localStorage.setItem('token', data.token)
            this.$router.push('/home')
          } else {
            this.$message({
              type: 'error',
              message: msg
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="stylus" scoped>
.button_wrap
    display flex
    justify-content space-around
.login {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2b4b6b;
}

.login_content {
  padding: 40px;
  padding-top: 100px;
  box-sizing: border-box;
  border-radius: 5px;
  width: 450px;
  height: 360px;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .logo_wrap {
    width: 130px;
    height: 130px;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    border: 1px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 10px #dddddd;
    padding: 10px;
    font-size: 0;
    background-color: #fff;

    .logo {
      width: 130px;
      height: 130px;
      background: #f5f5f5;
      border-radius: 50%;
    }
  }
}
</style>
