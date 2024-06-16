<template>
    <v-row>
<v-col md="6">
      <v-card>
        <v-img
          height="250"
          img: src= '../assets/menu.png'
          class="d-flex d-align-start"
        >
        </v-img>
      </v-card>
    </v-col>
    <v-col md="6">
  <v-card>
    <v-card-text>
      <VItemGroup>
        <v-list-item v-for="item in menu_items" :key="item.id" class="d-flex">
          <v-list-item-content class="d-flex align-center">
            <v-avatar size="80" class="mr-3">
              <v-img :src="item.img"/>
            </v-avatar>
            <div>
              <v-list-item-title>
                <h5 class="text-h5">{{ item.name }}</h5>
              </v-list-item-title>
              <v-list-item-subtitle>
                <b>{{ item.price }}₽</b>
              </v-list-item-subtitle>
            </div>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </VItemGroup>
            </v-card-text>
        </v-card>
    </v-col>
  </v-row>
</template>

<script>

 export default {
  data: () => ({
    menu_items: [
      {
        id: 0,
        name: 'Манты',
        img: require('../assets/manti.jpg'),
        price: 250
      },
      {
        id: 1,
        name: 'Хачапури',
        img: require('../assets/chapur.jpg'),
        price: 150
      },
    ]
  })
}
</script>

<style lang="scss" scoped>

</style>