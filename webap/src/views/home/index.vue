<template>
  <div class="home">
    <div class="top">
      <p @click="handChange">
        定位:
        <span>
          {{address}}
        </span>
      </p>
    </div>
    <Footer />
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      Info: '',
      isShow: false,
      isFalg: true,
      address: window.localStorage.getItem('name') ? JSON.parse(window.localStorage.getItem('address')).addressName : window.localStorage.getItem('name')
    }
  },
  methods: {
    handChange (e) {
      this.$router.push({
        path: `/address`
      })
    }
  },
  computed: {
    ...mapState('location', ['addressInfo'])
  },
  created () {
    this.$store.dispatch('location/geolocation').then(() => {
      const { addressInfo } = this.$store.state.location
      this.Info = addressInfo
      window.localStorage.setItem('address', JSON.stringify(addressInfo))
    }).catch(() => {
      console.log(this.Info, 0)
    })
  }
}
</script>

<style lang="scss" scoped>
@import 'base';
.top {
  width: 100%;
  height: 88px;
  p {
    width: 60%;
    height: 88px;
    line-height: 88px;
    @include no-wrap;
    span {
      font-size: 28px;
      color: #666;
    }
  }
}

#map {
  width: 100%;
  height: 800px;
}
</style>
