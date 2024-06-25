<template>
  <v-app>
    <navbar/>
    <router-view/>
  </v-app>
</template>

<script>
import navbar from '@/components/navbar';
export default {
  name: 'App',
  components: {
    navbar,
  }
};
</script>

<style>
/* стили CSS */
</style>