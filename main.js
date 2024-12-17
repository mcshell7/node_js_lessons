
const path = require('node:path');


const foo = async () => {

    // path
    const pathToHelper = path.join(__dirname, 'helpers', 'helper.js');
    console.log(path.basename(pathToHelper));
    console.log(path.dirname(pathToHelper));
    console.log(path.extname(pathToHelper));
    console.log(path.parse(pathToHelper));
    console.log(path.normalize(pathToHelper));
    console.log(path.isAbsolute(pathToHelper));
}

void foo();