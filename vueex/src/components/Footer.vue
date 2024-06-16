<template>
    <v-footer fixed padless color="deep-orange">
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
    isFooterVisible: false,
    links: [
      'О нас',
      'Контакты',
    ],
  }),
}
</script>

<style lang="scss" scoped>


</style>