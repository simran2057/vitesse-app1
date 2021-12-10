import register from '../components/register.vue'
import login from '../pages/login'
import index from '../components/index'

export default [
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: { layout: index },
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: { layout: index },
  },
]
