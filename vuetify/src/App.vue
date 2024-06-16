<template>
  <v-app>
      <navbar/>
      <List/>
  </v-app>
</template>

<script>
import navbar from '@/components/navbar';
import List from '@/components/List.vue';
export default {
  name: 'App',
  components: {
    navbar,
    List
  }
};
</script>
