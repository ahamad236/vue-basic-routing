import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/HomeComponent.vue"
import ChildHome from "../components/ChildHomeComponent.vue"
import FirstPage from "../components/FirstPageComponent.vue"
import SecondPage from "../components/SecondPageComponent.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          component: ChildHome
        },
        {
          path: '/firstPage',
          component: FirstPage
        },
        {
          path: '/secondPage',
          component: SecondPage
        }
      ]
    }
  ]
})

export default router
