<template>
  <div class="MenuRight" >
    <div class="top" ref="Top">
      <div>
        <p v-for="(k, i) in Top" :key="i">
          {{k.categoryName}}
        </p>
      </div>
    </div>
    <div class="centent">
      <div class="conten">
        <div v-for="(k, i) in Top" :key="i">
          <div v-for="(item, ind) in k.childCategoryList" :key="ind">
            <!-- {{item.categoryName}}
            {{item.categoryImgPathReal}} -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Right',
  props: ['Top'],
  data () {
    return {
    }
  },
  mounted () {
    /* eslint-disable no-new */
    new BScroll(this.$refs.Top, {
      click: true,
      scrollX: true
    })
  }
}
</script>

<style lang="scss" scoped>
@import 'base';
.MenuRight {
  width: 800px;
}
.top {
  width: 500px;
  height: 80px;
  @include setBottomLine;
  div {
    width: 101%;
    height: 80px;
    display: flex;
  }
  p {
    width: 140px;
    font-size: 26px;
    line-height: 88px;
    color: #999;
    text-align: center;
    flex-shrink: 0;
  }
}
</style>
