<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto" color="blue" dark>
            <v-card-title class="headline">{{$t('mainpagecard.title')}}</v-card-title>
            <v-card-subtitle>{{ $t('mainpagecard.subtitle') }}</v-card-subtitle>
            <v-card-text>
              {{ $t('mainpagecard.text') }}
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange" dark to="/rest">{{ $t('mainpagecard.btn') }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-subheader>{{ $t('mainpagecard.subheader') }}</v-subheader>
          <v-list>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ $t('mainpagecard.subheader-title-1') }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ $t('mainpagecard.subheader-title-2') }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ $t('mainpagecard.subheader-title-3') }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ $t('mainpagecard.subheader-title-4') }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ $t('mainpagecard.subheader-title-5') }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-subheader>{{ $t('mainpagecard.subheader-2') }}</v-subheader>
          <v-list>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-html="$t('mainpagecard.subheader-2-title-1')"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-html="$t('mainpagecard.subheader-2-title-2')"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-html="$t('mainpagecard.subheader-2-title-3')"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-html="$t('mainpagecard.subheader-2-title-4')"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-container>

  </v-main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>