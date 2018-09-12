### @vcli/v2

基于 vue-cli 修改的脚手架工具

由于官方脚手架构建环境比较单一，只有开发环境和生产环境，没有测试环境。如果测试环境的接口地址和生产环境接口不一致，在正式上线得手动修改接口地址前缀，极其不方便。

### Install
``` bash
$ npm install @vcli/v2 -g
OR
$ yarn global add @vcli/v2
```

### Usage

``` bash
$ v2 create <project_name>
```

Example:
``` bash
$ v2 create my-app
```