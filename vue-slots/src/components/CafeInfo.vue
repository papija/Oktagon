<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

</script>

<template>
      <!-- Карточка для изображения -->
      <v-col v-if="item" :key="`img-${item.id}`">
        <v-card class="h-100">
          <v-img
            height="350"
            :src="item.img"
            class="d-flex align-end"
          >
            <h2 class="text-h4 ml-6 mb-4 text-white">{{ $t(item.title) }}</h2>
          </v-img>
        </v-card>
        <!-- Карточка для описания -->
        <v-card class="h-100">
          <v-card-text>
            <p class="font-weight-light">{{ $t(item.description) }}</p>
          </v-card-text>
        </v-card>
      </v-col>
</template>

<script>
export default {
  props: {
    itemId: Number
  },
  computed: {
    item() {
      return this.$store.getters.getItemsList(this.itemId);
    }
  }
}
</script>

<style scoped>
.h-100 {
  height: 100%;
}
</style>
