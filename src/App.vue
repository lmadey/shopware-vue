<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import ProductsView from './components/ProductsView.vue'
export default defineComponent({
  components: { ProductsView },
  setup() {
    const selectedValue = ref('')
    const searchValue = ref('')
    const inputTimeout = ref<null | number>(null)
    provide('selectedValue', selectedValue)
    provide('searchValue', searchValue)
    provide('inputTimeout', inputTimeout)
  }
})
</script>

<template>
  <ProductsView />
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
