<template>
    <v-col>
      <!-- Карточка для изображения -->
      <v-card>
        <v-img
          height="250"
          :src="require('../assets/menu.png')"
          class="d-flex align-start"
        >
        </v-img>
      </v-card>
       <!-- Карточка для товара -->
      <v-card class="overflow-y-auto" style="max-height: 500px;">
        <v-card-text>
          <v-row>
            <v-col cols="12" v-for="product in products" v-if="products.length" :key="product.id">
              <v-card height="auto">
                <v-list-item class="d-flex">
                  <v-list-item-content class="d-flex align-center">
                    <v-avatar size="80" class="mr-3">
                      <v-img :src="product.dish_img"/>
                    </v-avatar>
                    <div>
                      <v-list-item-title>           
                        <h5 class="text-h5">{{ product.dish_name }}</h5>
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        <b>{{ product.dish_price }}₽</b>
                      </v-list-item-subtitle>
                      <v-dialog max-width="800">
  <template v-slot:activator="{ props: activatorProps }">
    <v-btn
      v-bind="activatorProps"
      color="white"
      size="small"
      text="Открыть описание"
      variant="flat"
    ></v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Описание блюда">
      <v-card-text>
        {{ product.dish_description }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Закрыть"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>
                    </div>
                  </v-list-item-content>
                  <v-list-item-action class="position-absolute" style="right: 10px; bottom: 20px;">
                    <v-btn icon>
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-card>
            </v-col>
            <v-col cols="12" v-if="!products.length">
            Продукты не найдены.
          </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
</template>


<script>

export default {
  props: {
    itemId: Number
  },
  computed: {
    products() {
      return this.$store.getters.getMenuByCafeId(this.itemId);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>