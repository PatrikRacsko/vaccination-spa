import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import App from './App.vue'
import routes from './router/routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).use(Quasar).use(createPinia()).mount('#app')
