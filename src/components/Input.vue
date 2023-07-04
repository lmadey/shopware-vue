<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { OnChange } from './Drop-down.vue'

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    onChange: {
      type: Function as PropType<OnChange>,
      required: true
    }
  }
})
</script>

<template>
  <input
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="placeholder"
    @input="onChange"
    class="field"
  />
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';

input {
  background-color: transparent !important;
  color: $white !important;
  width: 100%;
  border: 1px solid $gray;
  height: 32px;
  padding-left: 12px;
  border-radius: 12px;
  outline: none;

  &::placeholder {
    color: $gray !important;
  }

  &:focus {
    border: 1px solid $white;
  }
}
</style>
