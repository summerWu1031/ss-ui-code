import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TagsDemo from './components/TagsDemo.vue'
import {h} from 'vue';
import Markdown from '../src/components/Markdown.vue'
import intro from  './markdown/intro.md'
import install from './markdown/install.md'
import getStarted from './markdown/get-started.md'
const history = createWebHashHistory()
const md = (string)=>{return  h(Markdown,{content:string, key:string})};
export const router = createRouter({

    history: history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc,
            children: [
                {path:'',redirect:'/doc/intro'},
                { path: "intro", component: md(intro) },
                { path: "get-started", component: md(getStarted)},
                { path: "install", component: md(install) },
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