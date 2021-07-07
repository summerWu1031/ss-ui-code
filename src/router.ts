import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './components/views/Home.vue'
import Doc from './components/views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import DocDemo from './components/DocDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TagsDemo from './components/TagsDemo.vue'
import Intro from './components/views/Intro.vue';
import GetStarted from './components/views/GetStarted.vue'
import Install from './components/views/Install.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc,
            children: [
                {path:'',component:DocDemo},
                { path: "intro", component: Intro },
                { path: "get-started", component: GetStarted },
                { path: "install", component: Install },
                {path: 'switch', component: SwitchDemo},
                {path:'button',component:ButtonDemo},
                {path:'dialog',component:DialogDemo},
                {path:'tabs',component:TagsDemo},

            ]
        }
    ]
});
router.afterEach(()=>{
    console.log('路由切换了');
})