# my-vue-cli3-multipage

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 项目潜在的bug
> 1. 打包还未处理静态路径的问题: 无法修改Avoid modifying webpack output.publicPath directly. Use the "baseUrl" option instead.

### 项目进度
> 目前完成：1. 首页和layout所有基础框架建设,包括路由、vuex、utils、axios 2. 创建了子系统-系统配置大致框架（还未完成相应的layout和具体实现）

### 结构介绍
```
src
  ├─ router index的路由,后期可以引入所有pages的路由
  ├─ pages 放所有的页面.一个文件夹为一个单页应用
  │     └─ index 启动项目的首页
  │     └─ systemConf 系统配置的单页应用
  │
  ├─ components 项目公用的组件
  └─ vue.config.js  所有vue-loader和webpack的配置文件
  ```
