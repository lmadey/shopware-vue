<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export interface Option {
  value: string
  label: string
}

export type OnChange = (e: Event) => void

export default defineComponent({
  props: {
    options: {
      type: Array as PropType<Option[]>,
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
  <select @change="onChange">
    <option v-for="(option, index) in options" :key="index" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>
