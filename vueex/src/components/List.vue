<template>
    <v-main>
    <v-container>
    <v-row class="list-cafes-title">
      <v-col>
        <h2 class="text-center text-h3 py-3 bg-deep-orange">Список ресторанов</h2>
      </v-col>
    </v-row>
    
    <v-row class="list-cafes-content">
      <v-col md="4" v-for="item in items_list" :key="item.id">
        <v-card>
          
          <v-img
            height="250"
            :src="item.img"
          ></v-img>
          
          <v-card-title>
            <router-link :to="{ name: 'restInfo', params: { id: item.id } }">
            <h3 class="text-h4">{{ item.title }}</h3>
            </router-link>
          </v-card-title>
          
          <v-card-text>
            <p class="text-body-1">{{ item.description }}</p>
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
        title: 'Заведение 1',
        description: 'Неплохое заведение',
        img: require('../assets/1Cafe.jpg'),
        products: [
          {
            dish_name: 'Манты',
            dish_description: 'Традиционное азиатское горячее мясное блюдо. Тесто с мясной начинкой, приготовленное на пару, это и есть манты.',
            dish_img: require('../assets/manti.jpg'),
            dish_price: 250
          },
          {
            dish_name: 'Хачапури',
            dish_description: 'Неплохое блюдо',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 120
          },
          {
            dish_name: 'Хачапури',
            dish_description: 'Неплохое блюдо',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 150
          },
          {
            dish_name: 'Хачапури',
            dish_description: 'Неплохое блюдо',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 190
          },
          {
            dish_name: 'Хачапури',
            dish_description: 'Неплохое блюдо',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 210
          },
          {
            dish_name: 'Хачапури',
            dish_description: 'Неплохое блюдо',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 250
          },
      ]
      },
      {
        id: 1,
        title: 'Заведение 2',
        description: 'Неплохое заведение',
        img: require('../assets/2cafe.jpg'),
        products: [
          {
            dish_name: 'Довольный самурай',
            dish_description: 'Филадельфия (5шт.), Калифорния (5шт.), Бансай (5шт.), Лава (5шт.), Чикен крим (10шт.)',
            dish_img: require('../assets/samurai.png'),
            dish_price: 250
          },
          {
            dish_name: 'Сытый сумоист',
            dish_description: 'Филадельфия (5шт.), Калифорния (5шт.), Дракон (5шт.), Калифорния чикен (5шт.), Ясай маки (5шт.), Валенсия (5шт.), Небраска (5шт.), Монако (10шт.)',
            dish_img: require('../assets/sumo.png'),
            dish_price: 150
          },
        ]
      },
      {
        id: 2,
        title: 'Заведение 3',
        description: 'Неплохое заведение',
        img: require('../assets/3cafe.jpg'),
        products: [
          {
            dish_name: 'Манты',
            dish_description: 'Традиционное азиатское горячее мясное блюдо. Тесто с мясной начинкой, приготовленное на пару, это и есть манты.',
            dish_img: require('../assets/manti.jpg'),
            dish_price: 250
          },
          {
            dish_name: 'Хачапури',
            dish_description: 'Неплохое блюдо',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 150
          },
        ]
      },
      {
        id: 3,
        title: 'Заведение 4',
        description: 'Неплохое заведение',
        img: require('../assets/2cafe.jpg'),
        products: [
          {
            dish_name: 'Манты',
            dish_description: 'Традиционное азиатское горячее мясное блюдо. Тесто с мясной начинкой, приготовленное на пару, это и есть манты.',
            dish_img: require('../assets/manti.jpg'),
            dish_price: 250
          },
          {
            dish_name: 'Хачапури',
            dish_description: 'Неплохое блюдо',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 150
          },
        ]
      },
      {
        id: 4,
        title: 'Заведение 5',
        description: 'Неплохое заведение',
        img: require('../assets/2cafe.jpg'),
        products: [
          {
            dish_name: 'Манты',
            dish_description: 'Традиционное азиатское горячее мясное блюдо. Тесто с мясной начинкой, приготовленное на пару, это и есть манты.',
            dish_img: require('../assets/manti.jpg'),
            dish_price: 250
          },
          {
            dish_name: 'Хачапури',
            dish_description: 'Неплохое блюдо',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 150
          },
        ]
      },
      {
        id: 5,
        title: 'Заведение 6',
        description: 'Неплохое заведение',
        img: require('../assets/2cafe.jpg'),
        products: [
          {
            dish_name: 'Манты',
            dish_description: 'Традиционное азиатское горячее мясное блюдо. Тесто с мясной начинкой, приготовленное на пару, это и есть манты.',
            dish_img: require('../assets/manti.jpg'),
            dish_price: 250
          },
          {
            dish_name: 'Хачапури',
            dish_description: 'Неплохое блюдо',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 150
          },
          {
            dish_name: 'Халяль',
            dish_description: 'Неплохое блюдо',
            dish_img: require('../assets/chapur.jpg'),
            dish_price: 150
          },
        ]
      },
      {
        id: 6,
        title: 'Заведение 7',
        description: 'Неплохое заведение',
        img: require('../assets/2cafe.jpg'),
        products: [
          {
            dish_name: 'Манты',
            dish_description: 'Традиционное азиатское горячее мясное блюдо. Тесто с мясной начинкой, приготовленное на пару, это и есть манты.',
            dish_img: require('../assets/manti.jpg'),
            dish_price: 250
          },
          {
            dish_name: 'Хачапури',
            dish_description: 'Неплохое блюдо',
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