import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import ForumPage from '../views/ForumPage.vue'
import ForumSubjectPage from '../views/ForumSubjectPage.vue'
import TasksPage from '@/views/TasksPage.vue'
import ConditionTaskPage from '@/views/ConditionTaskPage.vue'
import AuthPage from '@/views/AuthPage.vue'
import EditProfilePage from '@/views/EditProfilePage.vue'
import TaskDetailPage from '@/views/TaskDetailPage.vue'

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
  {
    path: '/cond',
    name: 'Conditions',
    component: ConditionTaskPage,
  },
  {
    path: '/auth',
    name: 'Authentication',
    component: AuthPage,
  },
  {
    path: '/edit',
    name: 'EditProfile',
    component: EditProfilePage,
  },
  {
    path: '/tasks/detail/:id',
    name: 'TaskDetail',
    component: TaskDetailPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
