<template>
  <button class="btn" :class="typeClass" @click="handClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    plain: {
      type: String,
      default: 'Boolean' // 是否是镂空
    },
    size: {
      type: String,
      default: 'lg'
    },
    disabled: Boolean // 是否是禁用
  },
  computed: {
    typeClass () {
      const statusClass = {}
      statusClass[this.type] = true
      statusClass.plain = this.plain
      statusClass.disabled = this.disabled
      statusClass[this.size] = true
      return statusClass
    }
  },
  methods: {
    handClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'base';
  .btn {
    @include wh(100%, auto);
    font-size: 28px;
    padding: 20px;
    border-radius: 20px;
    border: 0;
    color: #fff;
    &.mini {
      width: auto;
      height: auto;
      display: inline-block;
    }
    &.primary {
      background: $color-theme;
    }
    &.plain {
      background: transparent;
      border: 1px solid #f00;
      &.primary {
        color: $color-theme;
        border-color: $color-theme;
      }
    }

  }
</style>
