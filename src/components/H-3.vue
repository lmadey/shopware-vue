<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    white: Boolean
  }
})
</script>

<template>
  <h3 :data-is-white="white">
    <slot></slot>
  </h3>
</template>

<style scoped lang="scss">
h3 {
  font-size: 22px;
  margin: 0;

  &[data-is-white='true'] {
    color: $white;
  }

  @media (max-width: $sm) {
    font-size: 16px;
  }
}
</style>
