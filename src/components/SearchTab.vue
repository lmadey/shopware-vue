<script lang="ts">
import { defineComponent, inject } from 'vue'
import { languages } from '../languages/languages'
import InputCompoennet from './Input.vue'

const { searchProduct } = languages.PL.labels

export default defineComponent({
  components: {
    InputCompoennet
  },
  setup() {
    const searchValue = inject('searchValue') as string
    const timeout = inject('inputTimeout') as null | number

    return {
      searchValue,
      timeout
    }
  },
  methods: {
    handleOnInputChange(e: Event) {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.searchValue = (e.target as HTMLInputElement).value
    }
  },
  data() {
    return {
      searchProduct
    }
  }
})
</script>

<template>
  <div class="wrapper">
    <InputCompoennet
      :onChange="handleOnInputChange"
      :placeholder="searchProduct"
      :modelValue="searchValue"
    />
  </div>
</template>

<style scoped lang="scss">
@import '../styles/base.scss';

.wrapper {
  @extend .base_layout;
  margin: 64px auto;
}
</style>
