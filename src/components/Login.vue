<template>
  <div id="paper">
    <Form :model="loginForm" :rules="rules" class="login-container" label-position="left">
      <h3 class="login_title">系统登录</h3>
      <FormItem label="Name">
        <Input type="text" v-model="loginForm.name" auto-complete="off" placeholder="账号"></Input>
      </FormItem>
      <FormItem label="password">
        <Input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></Input>
      </FormItem>
      <checkbox class="login_remember" v-model="checked"
                   label-position="left"><span style="color: #505458">记住密码</span></checkbox>
      <FormItem style="width: 100%">
        <Button type="primary" style="width: 40%;background: #505458;border: none" @click="login">登录</Button>
        <router-link to="register"><Button type="primary" style="width: 40%;background: #505458;border: none">注册</Button></router-link>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import axios from 'axios'
import qs from "qs"
import Router from 'vue-router'
export default{
    data () {
      return {
        rules: {
          name: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
          password: [{required: true, message: '密码不能为空', trigger: 'blur'}]
        },
        checked: true,
        loginForm: {
          name: '',
          password: ''
        }
        //loading: false
      }
    },
    methods: {
      login () {
        var _this = this
        console.log(this.$store.state)
        console.log("this.$store.state")
        this.$axios
         .post('/login', {
            name: this.loginForm.name,
            password: this.loginForm.password
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
        // var data = this.loginForm
              _this.$store.commit('login', _this.loginForm)
              var path = this.$route.query.redirect
              this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
              console.log("this.$store.state2")
            }
          })
          .catch(failResponse => {
            console.log("this.$store.state3")
          })
        }
      }
    }
</script>
<style>
   #paper {
    background:url("../assets/8cac73ab46ceed08ddc1f4f7505c5963.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
   body{
     margin: 0;
   }
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .login_remember {
    margin: 0px 0px 35px 0px;
    text-align: left;
  }
</style>