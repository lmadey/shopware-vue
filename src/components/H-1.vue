<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    white: Boolean
  }
})
</script>

<template>
  <h1 :data-is-white="white">
    <slot></slot>
  </h1>
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';
h1 {
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
