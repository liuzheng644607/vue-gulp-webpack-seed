# vue + vue-router + vuex 的一个后台管理模板

1. webpack vue vue-router vuex

## 开始

安装依赖:

```
npm install
```

本地开发, 如果没启动起来看看是不是`3000`端口被占.

```
# 可通过 --p 指定端口
npm run dev
```

生产环境

```
npm run build
```

## 目录结构

```
src/

├── App.vue
├── assets
│   ├── less
│   │   ├── common.less
│   │   ├── frame.less
│   │   ├── index.less
│   │   └── lib
│   └── menu.png
├── common
│   ├── ajax
│   │   └── index.js
│   ├── api
│   │   ├── index.js
│   │   └── readme.md
│   ├── index.js
│   ├── menu
│   │   ├── data-center.js
│   │   ├── index.js
│   │   └── user-center.js
│   ├── mixin
│   │   └── index.js
│   └── urlMap
│       └── index.js
├── components
│   ├── frame
│   │   ├── frame.vue
│   │   ├── header.vue
│   │   └── side-menu.vue
│   └── readme.md
├── main.js
├── pages
│   ├── 404.vue
│   ├── login
│   │   └── index.vue
│   ├── test
│   │   └── index.vue
│   └── user-center
│       └── index.vue
├── router
│   ├── index.js
│   ├── map.js
│   └── menu-router.js
└── store
    ├── constants
    │   └── mutation-types.js
    ├── index.js
    ├── modules
    │   ├── appState
    │   └── index.js
    └── readme.md
```
