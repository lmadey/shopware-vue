<script lang="ts">
import { defineComponent, inject } from 'vue'
import DropDown, { type Option } from './Drop-down.vue'
import { languages } from '../languages/languages'
import H1Vue from './H-1.vue'

const { shopwareListing, priceLow, priceHigh, selectSort } = languages.PL.labels

enum AvailableSortings {
  PriceDescending = 'price-desc',
  PriceAscending = 'price-asc',
  None = ''
}

const options: Option[] = [
  { label: selectSort, value: AvailableSortings.None },
  { label: priceLow, value: AvailableSortings.PriceAscending },
  { label: priceHigh, value: AvailableSortings.PriceDescending }
]

export default defineComponent({
  components: {
    DropDown,
    H1Vue
  },
  setup() {
    const selectedValue = inject('selectedValue')
    return {
      selectedValue
    }
  },

  data() {
    return {
      options,
      shopwareListing
    }
  },
  methods: {
    handleOnSelectChange(e: Event) {
      this.selectedValue = (e.target as HTMLSelectElement).value
    }
  }
})
</script>

<template>
  <header>
    <div class="header_inner">
      <H1Vue white>{{ shopwareListing }}</H1Vue>
      <DropDown :onChange="handleOnSelectChange" :options="options" />
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';
@import '../styles/base.scss';

header {
  width: 100%;
  padding: 0 16px;
  background-color: $primary;
}

.header_inner {
  @extend .base_layout;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  select {
    max-width: 220px;
  }
}
</style>
