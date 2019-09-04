import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../Welcome.vue';
import Counter from '../components/CounterGroup.vue';
import home from '../home.vue';
import main from '../main.vue';
import dialogconfirm from '../dialog-confirm.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    ,
    {
      path: '/dialogconfirm',
      name: 'dialogconfirm',
      component: dialogconfirm
    },
    {
      path: '/welcome/:username',
      component: Welcome,
      props:true,
      children: [
        {
          path: 'counter',
          component: Counter
        },{ path: 'todolist', redirect: '/' }]
    }
    /**,
   {
      path:"/counter",
      component:Counter
    },
    { path: '/todolist', redirect: '/' }
     */
  ]
})
