import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faHouse, faFolderOpen, faMessage, faMagnifyingGlass, faUserGroup, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)
library.add(faHouse)
library.add(faFolderOpen)
library.add(faMessage)
library.add(faMagnifyingGlass)
library.add(faUserGroup)
library.add(faCircleInfo)

createApp(App)
  .use(router)
  .use(createPinia())
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
