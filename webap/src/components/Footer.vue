<template>
  <footer>
    <nav>
      <router-link to="/home" active-class="active">首页</router-link>
      <router-link to="/classift" active-class="active">分页</router-link>
      <router-link to="/member" active-class="active">会员</router-link>
      <router-link to="/cart" active-class="active">购物</router-link>
      <router-link to="/my" active-class="active">我的</router-link>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import 'base';
footer {
  @include wh(100%, 88px);
  position: fixed;
  text-align: center;
  background: #fff;
  bottom: 0;
  nav {
    @include wh(100%, 88px);
    @include flex;
    a {
      @include wh(20%, 100%);
      @include lh(88px);
      @include fz(24px);
      @include setTopLine(#ccc);
      &.active {
        color: #ff712b
      }
    }
  }
}
</style>
