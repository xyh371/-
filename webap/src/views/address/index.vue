<template>
  <div>
    <Header>
      <Select />
    </Header>
  </div>
</template>

<script>
import Header from './component/Header.vue'
import Select from './component/Select.vue'
export default {
  name: 'Address',
  components: {
    Header,
    Select
  }
}
</script>
<style lang="scss" scoped>
</style>
