<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

</script>

<template>
  <v-main>
    <v-container>
      <v-row class="list-cafes-title">
        <v-col>
          <h2 class="text-center text-h3 py-3 bg-deep-orange">{{ $t('restPageTitle') }}</h2>
        </v-col>
      </v-row>

      <v-row class="list-cafes-content">
        <v-col md="4" v-for="item in items_list" :key="item.id">
          <v-card>

            <v-img height="250" :src="item.img"></v-img>

            <v-card-title>
              <router-link :to="{ name: 'restInfo', params: { id: item.id } }">
                <h3 class="text-h4">{{ $t(item.title) }}</h3>
              </router-link>
            </v-card-title>

            <v-card-text>
              <p class="text-body-1">{{ $t(item.description) }}</p>
            </v-card-text>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    items_list: [
      {
        id: 0,
        title: 'establishment.title-1',
        description: 'description.good',
        img: require('../assets/1Cafe.jpg'),
        products: [
          {
            id: 1,
            dish_name: 'dishes.manti',
            dish_description: 'description.manti',
            dish_img: require('../assets/manti.jpg'),
            dish_price: 250
          },
          {
            id: 2,
            dish_name: 'dishes.khachapuri',
            dish_description: 'description.default-dish',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 120
          },
          {
            id: 3,
            dish_name: 'dishes.khachapuri',
            dish_description: 'description.default-dish',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 150
          },
          {
            id: 4,
            dish_name: 'dishes.khachapuri',
            dish_description: 'description.default-dish',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 190
          },
          {
            id: 5,
            dish_name: 'dishes.khachapuri',
            dish_description: 'description.default-dish',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 210
          },
          {
            id: 6,
            dish_name: 'dishes.khachapuri',
            dish_description: 'description.default-dish',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 250
          },
      ]
      },
      {
        id: 1,
        title: 'establishment.title-2',
        description: 'description.good',
        img: require('../assets/2cafe.jpg'),
        products: [
          {
            id: 7,
            dish_name: 'dishes.happySamurai',
            dish_description: 'description.happySamurai',
            dish_img: require('../assets/samurai.png'),
            dish_price: 250
          },
          {
            id: 8,
            dish_name: 'dishes.fullSumo',
            dish_description: 'description.fullSumo',
            dish_img: require('../assets/sumo.png'),
            dish_price: 150
          },
        ]
      },
      {
        id: 2,
        title: 'establishment.title-3',
        description: 'description.good',
        img: require('../assets/3cafe.jpg'),
        products: [
          {
            id: 9,
            dish_name: 'dishes.manti',
            dish_description: 'description.manti',
            dish_img: require('../assets/manti.jpg'),
            dish_price: 250
          },
          {
            id: 10,
            dish_name: 'dishes.khachapuri',
            dish_description: 'description.default-dish',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 150
          },
        ]
      },
      {
        id: 3,
        title: 'establishment.title-4',
        description: 'description.good',
        img: require('../assets/2cafe.jpg'),
        products: [
          {
            id: 11,
            dish_name: 'dishes.manti',
            dish_description: 'description.manti',
            dish_img: require('../assets/manti.jpg'),
            dish_price: 250
          },
          {
            id: 12,
            dish_name: 'dishes.khachapuri',
            dish_description: 'description.default-dish',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 150
          },
        ]
      },
      {
        id: 4,
        title: 'establishment.title-5',
        description: 'description.good',
        img: require('../assets/2cafe.jpg'),
        products: [
          {
            id: 13,
            dish_name: 'dishes.manti',
            dish_description: 'description.manti',
            dish_img: require('../assets/manti.jpg'),
            dish_price: 250
          },
          {
            id: 14,
            dish_name: 'dishes.khachapuri',
            dish_description: 'description.default-dish',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 150
          },
        ]
      },
      {
        id: 5,
        title: 'establishment.title-6',
        description: 'description.good',
        img: require('../assets/2cafe.jpg'),
        products: [
          {
            id: 15,
            dish_name: 'dishes.manti',
            dish_description: 'description.manti',
            dish_img: require('../assets/manti.jpg'),
            dish_price: 250
          },
          {
            id: 16,
            dish_name: 'dishes.khachapuri',
            dish_description: 'description.default-dish',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 150
          },
        ]
      },
      {
        id: 6,
        title: 'establishment.title-7',
        description: 'description.good',
        img: require('../assets/2cafe.jpg'),
        products: [
          {
            id: 17,
            dish_name: 'dishes.manti',
            dish_description: 'description.manti',
            dish_img: require('../assets/manti.jpg'),
            dish_price: 250
          },
          {
            id: 18,
            dish_name: 'dishes.khachapuri',
            dish_description: 'description.default-dish',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 150
          },
        ]
      },
    ]
  }),
  methods: {
  updateList() {
    this.$store.dispatch('updateItemsList', this.items_list);
  },

  },
  mounted() {
    this.updateList();
}
}
</script>

<style lang="scss" scoped>

</style>