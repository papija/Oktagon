<template>
    <v-container>
        <CafeInfo/>
        <CafeMenu/>
    </v-container>
</template>

<script>
import CafeInfo from '@/components/CafeInfo.vue';
import CafeMenu from '@/components/CafeMenu.vue';
    export default {
  components: {
        CafeInfo,
        CafeMenu
  }
}
</script>

<style lang="scss" scoped>

</style>