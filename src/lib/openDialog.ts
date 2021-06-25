import {createApp, h} from 'vue';
import Dialog from './Dialog.vue';

export const openDialog = (options) => {
    const {title, content, ok, cancel} = options;
    const container = document.createElement('div');
    document.body.appendChild(container);
    //1.创建一个容器放到body下面
    //2.创造一个app,挂到容器下面
    const close = ()=>{
        // @ts-ignore
        app.unmount(container)
        container.remove()
    }
   const app= createApp({
        render() {
            return h(Dialog,
                {
                    visible: true,
                    //监听visible事件的变化，如果变为false就直接取消挂在
                    'onUpdate:visible': (newVisible) => {
                        if(newVisible===false){
                            close()
                        }
                    },
                    ok,cancel,
                    onClickOverlay:true
                },
                {title, content});
        }

    })

    app.mount(container)
};

