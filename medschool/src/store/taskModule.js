export default {
    state: {
      tasks: [
        {
          resolved: '',
          id: 1,
          title: 'Какое-то длинное название задачи',
          theme: 'Какая-то длинная тема задачи',
          content: 'Какая-то длинная тема задачи... (содержимое задачи)',
          analysis: 'Есть',
          difficulty: '70%',
          solvable: '0%',
          accepted: '0',
          answers: [
            { id: 1, text: 'Ответ 1', isCorrect: false },
            { id: 2, text: 'Ответ 2', isCorrect: true },
            { id: 3, text: 'Ответ 3', isCorrect: false },
            { id: 4, text: 'Ответ 4', isCorrect: false },
          ],
        },
        {
          resolved: '',
          id: 2,
          title: 'Какое-то длинное название задачи',
          theme: 'Какая-то длинная тема задачи',
          analysis: 'Нет',
          difficulty: '2%',
          solvable: '0%',
          accepted: '0',
          answers: [
            { id: 1, text: 'Ответ 1', isCorrect: false },
            { id: 2, text: 'Ответ 2', isCorrect: true },
            { id: 3, text: 'Ответ 3', isCorrect: false },
            { id: 4, text: 'Ответ 4', isCorrect: false },
          ],
        },
        {
          resolved: '',
          id: 3,
          title: 'Какое-то длинное название задачи',
          theme: 'Какая-то длинная тема задачи',
          analysis: 'Есть',
          difficulty: '1%',
          solvable: '0%',
          accepted: '0',
          answers: [
            { id: 1, text: 'Ответ 1', isCorrect: false },
            { id: 2, text: 'Ответ 2', isCorrect: true },
            { id: 3, text: 'Ответ 3', isCorrect: false },
            { id: 4, text: 'Ответ 4', isCorrect: false },
          ],
        },
        {
          resolved: '',
          id: 4,
          title: 'Очень простая задача',
          theme: 'Фармакология спорта',
          analysis: 'Есть',
          difficulty: '2%',
          solvable: '0%',
          accepted: '0',
          answers: [
            { id: 1, text: 'Ответ 1', isCorrect: false },
            { id: 2, text: 'Ответ 2', isCorrect: true },
            { id: 3, text: 'Ответ 3', isCorrect: false },
            { id: 4, text: 'Ответ 4', isCorrect: false },
          ],
        },
      ],
      userAnswers: []
    },
    getters: {
        allTasks: (state) => state.tasks,
        getTaskById: (state) => (id) => {
          const task = state.tasks.find(task => task.id === Number(id));
          return task;
        },
        getUserAnswers: (state) => state.userAnswers
      },
      mutations: {
        saveUserAnswer(state, answerData) {
          state.userAnswers.push(answerData);
        }
      },
      actions: {
        checkAnswer({ commit, state }, answerData) {
          const task = state.tasks.find(t => t.id === Number(answerData.taskId)); // Преобразование в число
      
          // Проверяем, существует ли задача
          if (!task) {
            console.error(`Задача с ID ${answerData.taskId} не найдена`);
            throw new Error('Задача не найдена');
          }
      
          const isCorrect = task.answers.some(a => a.id === answerData.selectedAnswerId && a.isCorrect);
          
          // Сохраняем ответ в state
          commit('saveUserAnswer', {
            date: answerData.date,
            taskId: answerData.taskId,
            authorName: answerData.authorName,
            isCorrect
          });
      
          return isCorrect; // Возвращаем результат проверки
        }
      }
    }