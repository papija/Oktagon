  <script setup>
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n({ useScope: 'global' })
  </script>


  <template>
    <v-footer fixed padless color="deep-orange">
      <v-row justify="center" no-gutters>
        <v-btn class="mx-2" color="white" rounded="xl" variant="text">{{ $t('footer.about') }}</v-btn>
        <v-btn class="mx-2" color="white" rounded="xl" variant="text">{{ $t('footer.contacts') }}</v-btn>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>FoodMark</strong>
        </v-col>
      </v-row>
    </v-footer>
  </template>

  <script>
  export default {
    
  }
  </script>

  <style lang="scss" scoped>


  </style>