#!/usr/bin/env node

const program = require('commander')
const fs = require('fs')
const chalk = require('chalk')
const download = require('download-git-repo')
const ora = require('ora')

/**
 * v2 create <project_app>
 */

// fs.readFileSync('package.json', 'utf8', (err, data) => {
//     if(err) console.log(err);
//     const d = JSON.parse(data)
//     version =  d.version
//     console.log(version);
// })

program
// 设置当前脚本的版本信息，会自动的给当前命令添加一个-V, --version的选项
.version(require('../package').version)
// 设置使用说明
.usage('<command> [options]')
// 配置命令参数
// .arguments('<v>')
// 设置 option 选项
.option('-h, --help', 'output usage information', function (){
    console.log('Usage: v2 <command> [options]\r\n')
    console.log('Options:\r\n');
    console.log('-V, --version  output the version number\r');
    console.log('-h, --help     output usage information\r\n');
    console.log('Commands:\r\n');
    console.log('create         generate a new project from a template\r');
})
// .option('-n, --number <v>', '传入的一个数字', function (a){
//     console.log('你传入的是: ' + a)
// })

program
.command('create <project_app>')
.description('创建项目')
.action(function (project_app){
    let projectPath = process.cwd() + '/' + project_app

    if(fs.existsSync(projectPath)){
        // console.log( chalk.red(`项目: ${project_app}已经存在`) )
        console.log( chalk.red(`The project ${projectPath} already exists`) );
    }else{
        // console.log( chalk.yellow(`即将创建项目: project_app`) );
        const spinner = ora('downloading template\r\n')
        spinner.start();
        // console.log('downloading template\r\n');

        download('https://github.com:dengxiaozhen/vue-cli-template#master', projectPath, {clone: true}, err => {
            console.log( err ? `Error: ${err}` : '');
        })

        // 创建目录
        // fs.mkdirSync(projectPath)
        // console.log( chalk.green('项目目录创建成功') );

        // fs.writeFileSync(projectPath + '/index.html');
        // console.log( chalk.green('项目首页创建成功'));

        // fs.mkdirSync(projectPath + '/css');
        // console.log( chalk.green('项目css目录创建成功'));

        // fs.mkdirSync(projectPath + '/js');
        // console.log( chalk.green('项目js目录创建成功'));

        console.log('# Project initialization finished!\r');
        console.log('# ========================\r\n');

        console.log('To get started:\r\n');
        console.log( chalk.yellow(`cd ${project_app}\r`) );
        console.log( chalk.yellow(`npm install\r`) );
        console.log( chalk.yellow(`npm run dev\r\n`) );

        console.log('Documentation can be found at https://github.com/dengxiaozhen/vue-cli-template');

        setTimeout(() => {
            spinner.stop()            
        }, 1000);
    }
})

program.parse(process.argv)