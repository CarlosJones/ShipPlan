import Vue from 'vue'
import Router from 'vue-router'
import ShipPlan from '@/components/ShipPlan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShipPlan',
      component: ShipPlan
    }
  ]
})
