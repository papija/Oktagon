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
            <h3 class="text-h4">{{ item.title }}</h3>
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
  name: 'List',
  data: () => ({
    items_list: [
      {
        id: 0,
        title: 'Заведение 1',
        description: 'Неплохое заведение',
        img :require('../assets/1Cafe.jpg')
      },
      {
        id: 1,
        title: 'Заведение 2',
        description: 'Неплохое заведение',
        img:require('../assets/2cafe.jpg')
      },
      {
        id: 2,
        title: 'Заведение 3',
        description: 'Неплохое заведение',
        img:require('../assets/3cafe.jpg')
          },
      {
        id: 3,
        title: 'Заведение 4',
        description: 'Неплохое заведение',
        img:require('../assets/2cafe.jpg')
          },
      {
        id: 4,
        title: 'Заведение 5',
        description: 'Неплохое заведение',
        img:require('../assets/2cafe.jpg')
          },
      {
        id: 5,
        title: 'Заведение 6',
        description: 'Неплохое заведение',
        img:require('../assets/2cafe.jpg')
          },
      {
        id: 6,
        title: 'Заведение 7',
        description: 'Неплохое заведение',
        img:require('../assets/2cafe.jpg')
      },
    ]
  })
}
</script>

<style lang="scss" scoped>

</style>