<template>
  <div class="my">
    5
    {{info}}
    <Footer />
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'My',
  computed: {
    ...mapState('user', ['info'])
  }
}
</script>

<style lang="scss" scoped>

</style>
