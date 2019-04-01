<template>
  <div class="inps">
    <div class="put">
      <div>
        <input type="search" placeholder="小区、街道、大厦" @keyup="keyup">
      </div>
      <span @click="handCancel" :class="val.length >= 1 ? 'active' : 'isActive'">
        取消
      </span>
    </div>
    <div class="mask" v-show="val.length >= 1">
      <ul>
        <li  v-for="(k, i) in data" :key="i" @click="handClick(k)">
          {{k.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import map from '@/utils/map'
export default {
  name: 'Select',
  data () {
    return {
      province: '',
      iocn: '<',
      provinces: JSON.parse(window.localStorage.getItem('address')),
      val: '',
      data: [],
      i: 1,
      time: ''
    }
  },
  created () {
    this.$store.dispatch('location/geolocation').then(() => {
      const { addressInfo } = this.$store.state.location
      this.province = addressInfo
    })
  },
  watch: {
    val (newVal) {
      this.search(newVal)
    }
  },
  methods: {
    handCancel () {
      this.val = ''
    },
    search (key) {
      map.search(key).then((data) => {
        this.data = data
      })
    },
    keyup (e) {
      clearTimeout(this.time)
      this.time = setTimeout(() => {
        this.val = e.target.value
      }, 500)
    },
    handClick (item) {
      window.localStorage.setItem('name', item.name)
      this.val = ''
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'base';
.inps {
  width: 100%;
  height: auto;
  overflow: hidden;
  .put {
    width: 100%;
    height: 88px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    div {
      width: 570px;
      height: 60px;
      border: 1px solid #777;
      display: flex;
      justify-content: space-between;
      input {
        width: 570px;
        height: 60px;
        font-size: 24px;
      }
    }
    span {
      width: 128px;
      height: 62px;
      line-height: 62px;
      font-size: 28px;
      background: #c8cccd;
      color: #fff;
      text-align: center;
      margin-left: 10px;
      border-radius: 6px;
    }
  }
  .active {
    background: skyblue
  }
  .isActive {
    background: #c8cccd
  }
  .mask {
    width: 100%;
    height: 1158px;
    background: rgba(0,0,0,0.5);
    padding: 0 20px;
    box-sizing: border-box;
    ul {
      width: 100%;
      height: auto;
      li {
        width: 100%;
        height: 100px;
        line-height: 100px;
        color: #fff;
        font-size: 28px;
      }
    }
  }
}
</style>
