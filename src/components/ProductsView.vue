<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from './Header.vue'
import SearchTab from './SearchTab.vue'
import Products from './Products.vue'

export default defineComponent({
  components: {
    HeaderComponent,
    SearchTab,
    Products
  }
})
</script>

<template>
  <div>
    <HeaderComponent />
    <main class="main">
      <SearchTab />
      <Products />
    </main>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/base.scss';
@import '../styles/base.scss';

.main {
  padding-bottom: 112px;
}
</style>
