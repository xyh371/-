<template>
  <div class="MenuLeft" ref="wrap">
    <div class="listLeft">
      <div v-for="(k, i) in goods.categoryList" :key="i" @click="change(i, k.categoryName)"
      :class="{'active': isActive === i}">
        {{k.categoryName}}
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: ['goods'],
  name: 'MenuLeft',
  data () {
    return {
      isActive: 0,
      type: '蔬菜水果'
    }
  },
  methods: {
    change (index, item) {
      this.isActive = index
      this.type = item
      console.log(this.type)
      this.$emit('Top', this.Top)
    }
  },
  mounted () {
    /* eslint-disable no-new */
    new BScroll(this.$refs.wrap, {
      click: true
    })
  },
  computed: {
    Top () {
      let res = {}
      this.goods.categoryList.map((item, index) => {
        if (item.categoryName === this.type) {
          res = item
        }
      })
      return res
    }
  }
}
</script>

<style lang="scss" scoped>
.MenuLeft {
  width: 291px;
  height: 88%;
  overflow: hidden;
}
.listLeft {
  width: 176px;
  height: 130%;
  background: #F6F6F6;
  div {
    width: 100%;
    height: 112px;
    font-size: 28px;
    line-height: 112px;
    text-align: center;
    color: #999;
    &.active {
      color: #4A4A4A;
      background: #FFFFFF;
    }
  }
}
</style>
