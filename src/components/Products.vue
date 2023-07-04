<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineComponent, inject, reactive } from 'vue'
import Loader from './Loader.vue'
import { products_listing, search } from '../endpoints'
import { postData } from '../utils/postData'
import ProductCard, { type Product } from './ProductCard.vue'

interface ProductResources {
  elements: Product[]
}

interface ProductsState {
  data: null | undefined | Product[]
}

const defaultSearchId = 'e435c9763b0d44fcab67ea1c0fdb3fa0'

export default defineComponent({
  components: { Loader, ProductCard },
  setup() {
    const products = reactive<ProductsState>({
      data: null
    })
    const timeout = inject('inputTimeout')
    const searchValue = inject('searchValue') as string
    const selectedValue = inject('selectedValue') as string
    return {
      products,
      searchValue,
      selectedValue,
      timeout
    }
  },

  methods: {
    async handleSearch(searchValue: string, selectedValue: string) {
      this.timeout = setTimeout(async () => {
        this.products.data = null
        if (searchValue === '') {
          const data = await postData<ProductResources>(`${products_listing}/${defaultSearchId}`, {
            search: searchValue,
            order: selectedValue
          })
          this.products.data = data ? data.elements : null
        } else {
          const data = await postData<ProductResources>(`${search}`, {
            search: searchValue,
            order: selectedValue
          })
          this.products.data = data ? data.elements : null
        }
      }, 600)
    }
  },
  watch: {
    searchValue(state) {
      this.handleSearch(state, this.selectedValue)
    },
    selectedValue(state) {
      this.handleSearch(this.searchValue, state)
    }
  },
  mounted() {
    this.handleSearch('', '')
  }
})
</script>

<template>
  <section class="section">
    <div v-if="products.data" class="container">
      <ProductCard v-for="product in products.data" :product="product" v-bind:key="product.id" />
    </div>
    <template v-else>
      <Loader />
    </template>
  </section>
</template>

<style scoped lang="scss">
@import '../styles/base.scss';
@import '../styles/variables.scss';

.section {
  width: 100%;
  background-color: $light-gray;
  padding-top: 112px;
  padding-bottom: 112px;
}

.container {
  @extend .base_layout;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
