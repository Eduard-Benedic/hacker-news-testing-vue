import Home from '../views/Home.vue'
import ItemList from '../components/ItemList.vue'


export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:type(top|new|show|ask|job)/:page?',
    component: ItemList
  },
  {
    path: '/',
    redirect: '/top'
  }
]