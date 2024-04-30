import './styles/global-styles.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {CustomInput}  from '@/components/shared'

const app = createApp(App)

app.use(router)

app.component('CustomInput', CustomInput)

app.mount('#app')
