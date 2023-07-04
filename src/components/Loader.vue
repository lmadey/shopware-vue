<script lang="ts">
import { defineComponent } from 'vue'
//@ts-ignore
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default defineComponent({
  components: { PulseLoader },
  data() {
    const color = '#05299e'
    return {
      color
    }
  }
})
</script>

<template>
  <div class="wrapper">
    <PulseLoader :color="color" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  min-height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
