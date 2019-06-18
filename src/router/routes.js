import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Know from '../pages/Know/Know.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Personage from '../pages/Personage/Personage.vue'


export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/know',
    component: Know
  },
  {
    path: '/shopping',
    component: Shopping
  },
  {
    path: '/personage',
    component: Personage
  },
  {
    path:'/',
    redirect:'/home'
  }
]
