export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
    user: {
      avatar: '',
      firstName: '',
      lastName: '',
      middleName: '',
      accountLevel: ''
    },
    users: [
      {
        login: 'user1',
        password: '123',
        avatar: require('@/assets/avatar.png'),
        firstName: 'Алексей',
        lastName: 'Смирнов',
        middleName: 'Иванович',
        accountLevel: '1'
      },
      {
        login: 'user2',
        password: '123',
        avatar: require('@/assets/avatar.png'),
        firstName: 'Мария',
        lastName: 'Петрова',
        middleName: 'Сергеевна',
        accountLevel: '1'
      },
      {
        login: 'user3',
        password: '123',
        avatar: require('@/assets/avatar.png'),
        firstName: 'Иван',
        lastName: 'Иванов',
        middleName: 'Иванович',
        accountLevel: '1'
      }
    ]
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    user: (state) => {
      if (state.isAuthenticated) {
        return state.user;
      }
      return null;
    }
  },
  mutations: {
    authenticate(state, userData) {
      state.isAuthenticated = true;
      state.user = { ...userData };
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isAuthenticated', true);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = { avatar: '', firstName: '', lastName: '', middleName: '', accountLevel: '' };
      // Очищаем все локальные хранилища
      localStorage.clear();
    },
    initializeStore(state) {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      const user = localStorage.getItem('user');
      
      if (isAuthenticated) {
        state.isAuthenticated = true;
        state.user = JSON.parse(user);
      }
    },
    updateProfile(state, updatedData) {
      state.user.firstName = updatedData.firstName;
      state.user.lastName = updatedData.lastName;
      state.user.middleName = updatedData.middleName;
      state.user.avatar = updatedData.avatar;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
  },
  actions: {
    login({ commit, state }, credentials) {
      return new Promise((resolve, reject) => {
        const user = state.users.find(user => user.login === credentials.login && user.password === credentials.password);
        
        if (user) {
          commit('authenticate', {
            avatar: user.avatar,
            firstName: user.firstName,
            lastName: user.lastName,
            middleName: user.middleName,
            accountLevel: user.accountLevel
          });
          resolve();
        } else {
          reject('Неверный логин или пароль');
        }
      });
    },
    initializeStore({ commit }) {
      commit('initializeStore');
    }
  }
}
