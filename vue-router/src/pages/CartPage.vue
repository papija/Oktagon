<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Корзина</v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item-group>
                  <v-list-item
                    v-for="(item, index) in cartItems"
                    :key="index"
                  >
                    <v-list-item-content>
                      <v-list-item-title>{{ item.name }}</v-list-item-title>
                      <v-list-item-subtitle>{{ item.price }}₽</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-btn icon @click="removeFromCart(index)">
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="secondary" @click="clearCart">Очистить корзину</v-btn>
              <v-btn color="primary" @click="showCheckoutDialog">Оформить заказ</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Подтверждение</v-card-title>
        <v-card-text>Вы уверены, что хотите оформить заказ?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false; checkout()">Да</v-btn>
          <v-btn color="red darken-1" text @click="dialog = false">Нет</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-main>
</template>

<script>

export default {
  data() {
        return {
      cartItems: [
        { name: 'Продукт 1', price: 500 },
        { name: 'Продукт 2', price: 1500 },
      ],
            dialog: false,
        snackbar: false,
      text: ``,
    };
  },
    methods: {
        removeFromCart(index) {
            this.cartItems.splice(index, 1);
        },
        clearCart() {
            this.cartItems = [];
        },
        showCheckoutDialog() {
            this.dialog = true;
        },
        checkout() {
            if (this.cartItems.length === 0) {
                alert('Корзина пуста. Добавьте товары перед оформлением заказа.');
            } else {
                this.dialog = false;
                alert('Заказ оформлен!');
                this.clearCart();
            }
        }
    }
};
</script>



<style lang="scss" scoped>

</style>