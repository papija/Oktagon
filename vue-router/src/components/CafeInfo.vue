<template>
  <v-main>
    <v-row>
    <v-col md="6">
      <v-card class="h-100">
        <v-img
          height="350"
          :src="main_info.img"
          class="d-flex align-end"
        >
          <h2 class="text-h4 ml-6 mb-4 text-white">{{ main_info.title }}</h2>
        </v-img>
      </v-card>
    </v-col>
    <v-col md="6">
       <v-card class="h-100">
         <v-card-text>
          <p class="font-weight-light">{{ main_info.description }}</p>
         </v-card-text>
       </v-card>
    </v-col>
  </v-row>
  </v-main>
</template>

<script>
    export default {
  data: () => ({
    main_info: {
      img: require('../assets/1Cafe.jpg'),
      title: 'Заведение 1',
      description: 'Неплохое заведение'
    }
  })
}
</script>

<style scoped>

.h-100 {
  height: 100%;
}

</style>