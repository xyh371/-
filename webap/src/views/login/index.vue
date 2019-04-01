<template>
  <div class="home-page">
    <div class="Top">
      <span class="one ones">{{iocn}}</span>
      <span>验证手机</span>
      <span class="one"></span>
    </div>
    <div class="Banner">
      <img src="//img.dmallcdn.com/common/1b1dac60-5a99-450c-b18c-c5f576fedcb9_750H" alt="">
    </div>
    <div class="from-box">
      <div class="login-item">
        <input type="text" placeholder="请输入您的手机号" v-model="formData.phone">
        <Button size="mini" @click="getCode">发送验证</Button>
      </div>
      <div class="login-item">
        <input type="text" placeholder="请输入验证码" v-model="formData.code">
      </div>
      <Button plain @click="login">登录</Button>
    </div>
  </div>
</template>

<script>
import api from '../../api/index.js'
export default {
  name: 'Login',
  data () {
    return {
      iocn: '<',
      formData: {
        phone: '',
        code: ''
      }
    }
  },
  methods: {
    login () {
      api.user.login(this.formData).then((res) => {
        console.log(res)
      })
    },
    async getCode () {
      const code = await api.user.getCode(this.formData.phone)
      console.log(code)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'base';
.home-page {
  @include wh(100%, 100%);
  background: #F6F6F6;
  overflow: hidden;
  .Top {
    @include wh(100%, 88px);
    @include flex;
    padding: 0 20px;
    box-sizing: border-box;
    background: #fff;
    span {
      @include fz(32px);
    }
    .one {
      @include wh(60px, 60px);
      line-height: 60px;
      font-family: '宋体';
      font-size: 40px;
    }
    .ones {
      background: #333;
      color: #fff;
      font-weight: 900;
      border-radius: 50%;
    }
  }
  .Banner {
    @include wh(100%, auto);
    margin-bottom: 22px;
    img {
      @include wh(100%, auto);
    }
  }
  .login-item {
    width: 100%;
    height: 120px;
    background: #fff;
    &.login-item:nth-of-type(2) {
      @include setTopLine;
      input {
        width: 100%;
        padding-left: 20px;
      }
    }
    input {
      width: 74%;
      height: 100%;
      font-size: 28px;
    }
  }
}
</style>
