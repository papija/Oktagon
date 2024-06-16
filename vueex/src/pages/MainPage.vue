<template>
    <v-main>
         <v-container>
  <v-row>
    <v-col cols="12">
      <v-card class="mx-auto" color="blue" dark>
        <v-card-title class="headline">Добро пожаловать на "FoodMark"</v-card-title>
        <v-card-subtitle>ваш универсальный портал для заказа блюд из лучших ресторанов города!</v-card-subtitle>
        <v-card-text>
          На нашем сайте вы найдете широкий выбор кулинарных шедевров от местных закусочных до изысканных ресторанов. "FoodMark" предлагает удобный и быстрый способ насладиться вашими любимыми блюдами, не выходя из дома.
        </v-card-text>
        <v-card-actions>
          <v-btn color="orange" dark to="/rest">Заказать сейчас</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12">
      <v-subheader>Как это работает:</v-subheader>
      <v-list>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>1. Выберите ресторан из списка или используйте поиск по кухне, блюду или району.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>2. Просмотрите меню и добавьте желаемые блюда в корзину.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>3. Оформите заказ, указав адрес доставки и предпочтительное время.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>4. Оплатите онлайн через нашу защищенную платежную систему.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>5. Отслеживайте статус вашего заказа в реальном времени.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12">
      <v-subheader>Наши преимущества:</v-subheader>
      <v-list>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title><strong>Широкий ассортимент:</strong> от пиццы и суши до диетических и вегетарианских блюд.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title><strong>Гибкость:</strong> возможность заказа на сейчас или предварительного заказа.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title><strong>Бонусная программа:</strong> накапливайте баллы и получайте скидки на следующие заказы.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title><strong>Круглосуточная поддержка:</strong> наши операторы всегда готовы помочь вам с выбором или оформлением заказа.</v-list-item-title>
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