* 引入饿了么组件
1. 安装：  
npm install element-ui --save-dev  
npm install element-theme-default --save-dev
2. main.js 添加：
```
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'  

Vue.use(ElementUI)
```

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
