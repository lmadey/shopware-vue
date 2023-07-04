<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { languages } from '../languages/languages'

export interface Product {
  name: string
  id: string
  translated: {
    description: string
    name: string
  }
  calculatedPrice: {
    totalPrice: number
  }
}

const { price, currency } = languages.PL.labels

export default defineComponent({
  props: {
    product: { type: Object as PropType<Product>, required: true }
  },
  data() {
    return {
      price,
      currency
    }
  }
})
</script>

<template>
  <div class="card">
    <strong>{{ product.translated.name }}</strong>
    <p>{{ product.translated.description }}</p>
    <span class="price">
      <strong>{{ price }}</strong>
      <p>{{ product.calculatedPrice.totalPrice.toFixed(2) }} {{ currency }}</p>
    </span>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';
@import '../styles/base.scss';

.card {
  @extend .box_shadow;

  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  border-radius: 16px;
  width: 100%;
}

.price {
  display: flex;
  gap: 5px;
}
</style>
