import './styles/global-styles.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { DSButton, DSInput } from '@/components/ds'

const app = createApp(App)

app.use(router)

app.component('DSInput', DSInput)
app.component('DSButton', DSButton)

app.mount('#app')
