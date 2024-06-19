export default {
  state: {
    cartItems: []
  },
  mutations: {
    addToCart(state, item) {
      const existingItem = state.cartItems.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1; // Предполагаем, что quantity есть у объекта item
      } else {
        item.quantity = 1; // Добавляем новое свойство quantity
        state.cartItems.push(item);
      }
    }
  },
  getters: {
    cartItems: (state) => {
      return state.cartItems;
    }
  }
}