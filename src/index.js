'use strict';

const $ = require('jquery');

// const {greeting, power, banana} = require('./say-hello.js');

import greeting from './say-hello.js'
import power from './say-hello.js'
import banana from './say-hello.js'


console.log(greeting.sayHello());
console.log(power.power(2, 4));
console.log(banana);

// const sayHello = () => console.log('hello');
// sayHello();

$('body').css('background-color', 'black');

$('body').html('<h1>Hello</h1>');

$('body').css('color', 'white');




