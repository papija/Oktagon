<template>
    <v-app-bar app color="deep-orange">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-divider class="ms-4" inset vertical></v-divider>
        <v-app-bar-title><h3 class="text-h4 white--text">FoodMark</h3></v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn to="/cart">
          <v-icon size="25">mdi mdi-cart-variant</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer color="rgb(250, 75, 0)"
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :prepend-icon="item.icon"
        >{{ item.title }}</v-list-item>
      </v-navigation-drawer>
      <v-footer app color="deep-orange">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        class="mx-2"
        color="white"
        rounded="xl"
        variant="text"
      >
        {{ link }}
      </v-btn>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>FoodMark</strong>
    </v-col>
    </v-row>
  </v-footer>
</template>

<script>
    export default {
    data: () => ({
      drawer: false,
      group: null,
      links: [
        'О нас',
        'Контакты',
    ],
      items: [
        {
          title: 'Главная страница',
          icon: 'mdi mdi-home',
          value: 'home',
        },
        {
          title: 'Список ресторанов',
          icon: 'mdi mdi-coffee',
          value: 'rest',
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>