<template>
  <cart>
    <template v-slot:cart-title>
      <h2>Ваша корзина покупок</h2>
    </template>

    <template v-slot:cart-items>
      <li v-for="item in cartItems" :key="item.id">
        {{ $t(item.dish_name) }} - {{ item.quantity }} шт.
      </li>
    </template>

    <template v-slot:cart-footer>
      <button @click="checkout">Перейти к оплате</button>
    </template>
  </cart>
</template>

<script>
import { mapGetters } from 'vuex';
import Slots from '@/components/Slots.vue';

export default {
  components: {
    Cart: Slots
  },
  computed: {
    ...mapGetters(['cartItems'])
  },
  methods: {
    checkout() {
    }
  }
}
</script>