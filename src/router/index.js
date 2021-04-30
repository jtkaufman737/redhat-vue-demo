import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Gallery',
    component: function() {
      return import('../views/Gallery.vue')
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
