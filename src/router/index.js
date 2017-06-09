import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import VueAudioPlayer from '../components/VueAudioPlayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VueAudioPlayer',
      component: VueAudioPlayer
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
