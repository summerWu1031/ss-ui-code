import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from  'vue-router'
import Sum from './components/Sum.vue'
import Sum2 from './components/Sum2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[{path:'/', component:Sum},
        {path:'/xxx',component:Sum2}]
})

const app = createApp(App)
    app.use(router)
    app.mount('#app')
