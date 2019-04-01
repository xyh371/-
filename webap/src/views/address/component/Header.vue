<template>
  <header>
    <div class="top">
      <span class="one ones" @click="handHome">{{iocn}}</span>
      <b v-if="provinces !== '' ? true : false">{{provinces.province}}</b>
    </div>
    <div class="inp">
      <slot @click="handClick(name)"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      province: '',
      iocn: '<',
      provinces: JSON.parse(window.localStorage.getItem('addressInfo')),
      val: ''
    }
  },
  methods: {
    handHome () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'base';
header {
  width: 100%;
  height: 88px;
}
.top {
  width: 100%;
  height: 88px;
  line-height: 88px;
  padding: 0 20px;
  box-sizing: border-box;
  .ones {
    background: #333;
    display: inline-block;
    color: #fff;
    font-weight: 900;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-family: '宋体';
    font-size: 40px;
    text-align: center;
  }
  b {
    margin-left: 40px;
  }
}
</style>
