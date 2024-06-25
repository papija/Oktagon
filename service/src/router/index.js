import { createRouter, createWebHistory } from 'vue-router'
import RentCarPage from '../views/RentCarPage'
import RentFlightsPage from '../views/RentFlightsPage'
import RentAccommodationsPage from '../views/RentAccommodationsPage'
import RentHotelPage from '../views/RentHotelPage.vue'

const routes = [
  {
  path: '/cars',
  name: 'Car',
  component: RentCarPage
  },
  {
  path: '/flights',
  name: 'Flight',
  component: RentFlightsPage
  },
  {
  path: '/',
  name: 'Accommodations',
  component: RentAccommodationsPage
  },
  {
  path: '/hotels',
  name: 'Hotels',
  component: RentHotelPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router