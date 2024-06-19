<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col md="6">
          <CafeInfo :item-id="itemId"/>
        </v-col>
        <v-col md="6">
          <CafeMenu :item-id="itemId"/>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import CafeInfo from '@/components/CafeInfo.vue';
import CafeMenu from '@/components/CafeMenu.vue';

export default {
  components: {
    CafeInfo,
    CafeMenu
  },

  computed: {
    itemId() {
      return Number(this.$route.params.id);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>