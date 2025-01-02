const myName = 'mario';

//console.log(myName);

const greet = (name) => {
    console.log(`hello, ${name}!`)
}

//console.log(greet('aaa'));


//1. Global object
//console.log(global)

/*
const int = global.setInterval(() => {
    console.log('interval!')
}, 1000);

global.setInterval(() => {
    console.log('timeout!')
    clearInterval(int)
}, 3000);
*/

/*
console.log('\n', __dirname);
console.log(__filename);
*/

//destructureing
const { letters, ages } = require('./letter')

//console.log(letters);
//console.log(ages);


const os = require('os');

//console.log(os.platform(), os.homedir());












