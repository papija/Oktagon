import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import ForumPage from '../views/ForumPage.vue'
import ForumSubjectPage from '../views/ForumSubjectPage.vue'
import TasksPage from '@/views/TasksPage.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage
  },
  {
    path: '/forum',
    name: 'Forum',
    component: ForumPage
  },
  {
    path: '/forum/subject/:id',
    name: 'Subject',
    component: ForumSubjectPage,
    props: route => ({ id: Number(route.params.id) })
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: TasksPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
