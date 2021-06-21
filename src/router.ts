import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './components/views/Home.vue'
import Doc from './components/views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import DocDemo from './components/DocDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TagsDemo from './components/TagsDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc,
            children: [
                {path:'',component:DocDemo},
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