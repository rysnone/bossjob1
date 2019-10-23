# bossjob

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

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

# 使用 vue + node 模仿 boss直聘移动端
# 推送代码至云端，可使用git、tortoiseGit与vscode的提交推送
# 将本地代码托管到码云中，使用源代码管理工具SVN或Git:
（建好的项目中）
 1. 新建一个 .gitignore 文件（项目忽略文件）
 - 文件内容：
 - node_modules
 - .idea
 - .vscode
 - .git
 2. 新建 README.md 项目描述文件
 - 这是一个xx的项目
 3. LICENSE （开源协议，可以从mui-master中直接复制过来）
 - 使用git命令执行一些操作，先安装Git
 4. 项目终端输入命令：git init，创建本地仓库
 5. 在码云中创建仓库，执行后续操作
## 安装vue
1. 查看版本
    $ npm -v
2. 升级 npm
    cnpm install npm -g
3. 升级或安装 cnpm
    npm install cnpm -g
4. 使用vue
    $ cnpm install vue
5. 全局安装 vue-cli
    $ cnpm install --global vue-cli
6. 创建一个基于 webpack 模板的新项目
    $ vue init webpack my-project

# F:\myprojects> vue init webpack bossjob

# 组件中使用scss,scoped设为组件内生效
 $<style lang="scss" scoped></style>
npm install sass-loader@7.3.1 --save
npm install node-sass --save
在build文件夹下的webpack.base.conf.js的rules里面添加配置
  {
    test: /\.scss$/, 
    loaders: ['style', 'css', 'sass'] 
   }
   注意，安装sass-loader不能安装最新版本，否则会报错

   # 使用 mint-ui 基于 Vue.js 的移动端组件库
    1. npm i mint-ui -S
    2.使用：
    全部引用：
    import Vue from 'vue'
    import MintUI from 'mint-ui'
    import 'mint-ui/lib/style.css'
    import App from './App.vue'

    Vue.use(MintUI)

    new Vue({
    el: '#app',
    components: { App }
    })
    ============
    部分引用：
    import Vue from 'vue'
    import { Button, Cell } from 'mint-ui'
    import App from './App.vue'

    Vue.component(Button.name, Button)
    Vue.component(Cell.name, Cell)
    /* 或写为
    * Vue.use(Button)
    * Vue.use(Cell)
    */

    new Vue({daoru
    el: '#app',
    components: { App }
    })
==============
## 使用Ajax库-axios 
 $ npm install --save --save-exact axios vue-axios
 在main.js中导入
 
