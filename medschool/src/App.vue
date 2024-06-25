<template>
  <v-app>
    <v-row class="ma-0" style="display: flex; min-height: 100vh;">
      <div class="pa-0" style="width: 340px; flex-shrink: 0;">
        <Menu/>
      </div>

      <div class="pa-0" style="flex-grow: 1; min-height: 0;">
        <router-view />
      </div>
    </v-row>
  </v-app>
</template>

<script>
import Menu from '@/components/menu.vue';
export default {
  name: 'App',
  components: {
    Menu,
  }
};
</script>

<style scoped>

</style>
