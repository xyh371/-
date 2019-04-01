<template>
  <div class="classift">
    <nav>
      <p v-for="(k, i) in data" :key="i" :class="{'active': i === isActive}" @click="hand(i, k.store.name)">
        {{k.store.name}}
      </p>
    </nav>
    <div class="menu">
      <div class="list">
        <MenuLeft :goods="goods" ref="left" @Top="Tops" />
        <!-- <MenuRight :Top="Top"/> -->
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import data from '../../static/mack/data.json'
import MenuLeft from './menu/Left.vue'
// import MenuRight from './menu/Right.vue'
export default {
  name: 'ClassIft',
  components: {
    MenuLeft
    // MenuRight
  },
  data () {
    return {
      data: '',
      isActive: 0,
      name: '多点超市',
      Top: ''
    }
  },
  created () {
    /* eslint-disable */
    for (let i in data) {
      this.data = data.wareCategory
    }
  },
  methods: {
    hand (index, name) {
      this.isActive = index
      this.name = name
    },
    //left 传来的参数
    Tops (name) {
      this.Top = name.childCategoryList;
    }
  },
  computed: {
    goods () {
      let res = {}
      this.data.map((item, index) => {
        if (item.store.name === this.name) {
          res = item
        }
      })
      return res
    }
  },
  mounted() {
    //方法一
    this.Top = this.$refs.left.Top.childCategoryList
  }
}
</script>
<style lang="scss" scoped>
@import 'base';
.classift {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
nav {
  width: 100%;
  height: 110px;
  display: flex;
  font-size: 32px;
  align-items: center;
  @include setBottomLine;
  background: #fff;
  p {
    height: 100%;
    line-height: 110px;
    margin: 0 32px;
  }
  .active {
    font-weight: 900;
    border-bottom: 4px solid #FF712B;
  }
}
.menu {
  width: 100%;
  height: 100%;
  .list {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  .active {
    display: block;
    width: 100%;
  }
}
.aaa {
  width: 100px;
  height: 100px;
  background: red;
}
</style>
