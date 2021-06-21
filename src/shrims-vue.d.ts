declare  module  '*.vue'{
    import {ComponentOptions} from  'vue'
    const componentOptions:ComponentOptions
    export default componentOptions
}
declare module "*.svg" {
    const content: any;
    export default content;
}