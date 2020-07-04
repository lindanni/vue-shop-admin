<template>
    <div class="login">
       <div class="login_content">
           <div class="logo_wrap">
                <img src="../assets/img/logo.png" alt="" class="logo">
           </div>
           <form action="" id="login_form">
               <div class="username_wrap input_wrap">
                    <label for="">账号</label>
                    <div class="input-w">
                        <i class="iconfont icon-user"></i>
                        <input type="text" name="username" class="username">
                    </div>
               </div>
               <div class="password_wrap input_wrap">
                    <label for="">密码</label>
                    <div class="input-w">
                        <i class="iconfont icon-3702mima"></i>
                        <input type="text" class="password" name="password">
                    </div>
               </div>
           </form>
           <div class="botton_wrap">
                <button class="login-btn">登录</button>
                <button class="re-btn">重置</button>
           </div>
       </div>
    </div>
</template>
<script>
export default {
  name: 'Login'
}
</script>
<style lang="stylus" scoped>
    .login
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        background-color #2b4b6b
    .login_content
        border-radius 5px
        width 450px
        height 360px
        background #fff
        position absolute
        left 50%
        top 50%
        transform: translate(-50%, -50%)
        .logo_wrap
            width 130px
            height 130px
            margin-left 50%
            transform translate(-50%, -50%)
            border 1px solid #fff
            border-radius 50%
            box-shadow 0 0 10px #dddddd
            padding 10px
            font-size 0
            background-color #fff
            .logo
                width 130px
                height 130px
                background #f5f5f5
                border-radius 50%
        #login_form
            margin-top -40px
            .input_wrap
                display flex
                align-items center
                margin-bottom 20px
                label
                    color #333
                    font-size 14px
                    padding 0 20px
                    &::before
                        content '*'
                        color red
                        padding-right 3px
                .input-w
                    display inline-block
                    border 1px solid #dddddd
                    height 40px
                    width 300px
                    line-height 40px
                    border-radius 5px
                    position relative
                    i
                        position absolute
                        z-index 1
                        left 10px
                        color #aaa
                    input
                        left 0
                        top 0
                        position absolute
                        border none
                        width 100%
                        padding 10px
                        box-sizing border-box
                        height 100%
                        border-radius 5px
                        padding-left 30px
        .botton_wrap
            width 160px
            margin 0 auto
            margin-top 20px
            display flex
            justify-content space-around
            button
                padding 0 10px
                width 60px
                height 40px
                border none
                border-radius 5px
                color #fff
                cursor pointer
                &.login-btn
                    background #409EFF
                &.re-btn
                    background #aaa
</style>
