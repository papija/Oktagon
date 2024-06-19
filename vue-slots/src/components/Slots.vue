<template>
  <v-main>
  <div class="cart">
    <slot name="cart-title"></slot>
    <ul>
      <slot name="cart-items"></slot>
    </ul>
    <slot name="cart-footer"></slot>
  </div>
  </v-main>
</template>

<script>
export default {
  methods: {
    checkout() {
      // Логика оформления заказа
    }
  }
}
</script>

<style lang="scss" scoped>

</style>