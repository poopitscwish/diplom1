import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {path:'/orders', component: ()=>import('@/views/Orders')}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
