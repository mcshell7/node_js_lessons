
const path = require('node:path');
const readline = require("node:readline");
const fs = require('fs/promises');


const foo = async () => {

    // path
//     const pathToHelper = path.join(__dirname, 'helpers', 'helper.js');
//     console.log(path.basename(pathToHelper));
//     console.log(path.dirname(pathToHelper));
//     console.log(path.extname(pathToHelper));
//     console.log(path.parse(pathToHelper));
//     console.log(path.normalize(pathToHelper));
//     console.log(path.isAbsolute(pathToHelper));


    // readline
    const rlInstance = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rlInstance.question('What is your name? ', (name ) => {
        console.log(`Hello ${name}`);
        rlInstance.close();
    })
// os
    const os = require('os');

    console.log('Архитектура:', os.arch());
    console.log('Платформа:', os.platform());
    console.log('Тип ОС:', os.type());
    console.log('Версия ОС:', os.release());
    console.log('Имя хоста:', os.hostname());
    console.log('Домашняя директория:', os.homedir());
    console.log('Временная директория:', os.tmpdir());

// fs
    const fsPromises = require('fs/promises');

    await fsPromises.writeFile('test.txt', 'Hello world');
    const data = await fsPromises.readFile(path.join(process.cwd(), 'test.txt'), 'utf8');
    console.log(data);


}



void foo();






